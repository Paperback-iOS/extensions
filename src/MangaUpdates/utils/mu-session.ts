import type { SourceStateManager } from '@paperback/types'
import type { BaseRequest } from '../models'
const logPrefix = '[mu-session]'
const STATE_MU_CREDENTIALS = 'mu_credentials'
const STATE_MU_SESSION = 'mu_sessiontoken'
export interface Credentials {
    username: string;
    password: string;
}
interface SessionTokenJwtPayload {
    session: string;
    time_created: number;
}
export function validateCredentials(credentials: unknown): credentials is Credentials {
    return (credentials != null
        && typeof credentials === 'object'
        && typeof (credentials as Credentials).username === 'string'
        && typeof (credentials as Credentials).password === 'string')
}
export async function getUserCredentials(stateManager: SourceStateManager): Promise<Credentials | undefined> {
    const credentialsString = await stateManager.keychain.retrieve(STATE_MU_CREDENTIALS)
    if (typeof credentialsString !== 'string') {
        return undefined
    }
    const credentials = JSON.parse(credentialsString)
    if (!validateCredentials(credentials)) {
        console.log(`${logPrefix} store contains invalid credentials!`)
        return undefined
    }
    return credentials
}
export async function setUserCredentials(stateManager: SourceStateManager, credentials: Credentials): Promise<void> {
    if (!validateCredentials(credentials)) {
        console.log(`${logPrefix} tried to store invalid mu_credentials: ${JSON.stringify(credentials)}`)
        throw new Error('tried to store invalid mu_credentials')
    }
    await stateManager.keychain.store(STATE_MU_CREDENTIALS, JSON.stringify(credentials))
}
export async function clearUserCredentials(stateManager: SourceStateManager): Promise<void> {
    await stateManager.keychain.store(STATE_MU_CREDENTIALS, undefined)
}
export async function getSessionToken(stateManager: SourceStateManager): Promise<string | undefined> {
    const sessionToken = await stateManager.keychain.retrieve(STATE_MU_SESSION)
    return typeof sessionToken === 'string' ? sessionToken : undefined
}
export async function setSessionToken(stateManager: SourceStateManager, sessionToken: string): Promise<void> {
    if (typeof sessionToken !== 'string') {
        console.log(`${logPrefix} tried to store invalid mu_sessiontoken: ${sessionToken}`)
        throw new Error('tried to store invalid mu_sessiontoken')
    }
    await stateManager.keychain.store(STATE_MU_SESSION, sessionToken)
}
export async function clearSessionToken(stateManager: SourceStateManager): Promise<void> {
    await stateManager.keychain.store(STATE_MU_SESSION, undefined)
}
export function getLoginTime(sessionToken: string | undefined): string {
    if (!sessionToken) {
        return '-'
    }
    try {
        const payloadBase64 = sessionToken.split('.')[1] || ''
        const payloadJson = Buffer.from(payloadBase64, 'base64').toString()
        const payload: SessionTokenJwtPayload = JSON.parse(payloadJson)
        const loginTime = new Date(payload.time_created * 1000)
        if (isNaN(loginTime.getTime())) {
            throw new Error('invalid date')
        }
        return loginTime.toLocaleString()
    }
    catch (e) {
        console.log(`${logPrefix} failed to parse login time`)
        console.log(e)
        return '-'
    }
}
export function loggableRequest(request: Partial<BaseRequest>): string {
    let censoredRequest = request
    // e.g. on login, register, change password
    if (censoredRequest.body?.password) {
        censoredRequest = {
            ...request,
            body: {
                ...request.body,
                password: '***'
            }
        }
    }
    // e.g. on confirm registration, change password, delete account
    if (censoredRequest.params?.authHash) {
        censoredRequest = {
            ...censoredRequest,
            params: {
                ...censoredRequest.params,
                authHash: '***'
            }
        }
    }
    return JSON.stringify(censoredRequest)
}
// eslint-disable-next-line
export function loggableResponse(response: any): string {
    if (!response) {
        return '<empty>'
    }
    let censoredResponse = response
    // e.g. on login
    if (censoredResponse.context?.session_token) {
        censoredResponse = {
            ...censoredResponse,
            context: {
                ...censoredResponse.context,
                session_token: '***'
            }
        }
    }
    return JSON.stringify(censoredResponse)
}
