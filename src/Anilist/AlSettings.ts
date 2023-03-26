import {
    DUINavigationButton,
    SourceStateManager
} from '@paperback/types'

export const getDefaultStatus = async (stateManager: SourceStateManager): Promise<string[]> => {
    return (await stateManager.retrieve('defaultStatus') as string[]) ?? ['NONE']
}
export const getDefaultPrivate = async (stateManager: SourceStateManager): Promise<string[]> => {
    return (await stateManager.retrieve('defaultPrivate') as string[]) ?? ['NEVER']
}
export const getDefaultHideFromActivity = async (stateManager: SourceStateManager): Promise<string[]> => {
    return (await stateManager.retrieve('defaultHideFromActivity') as string[]) ?? ['NEVER']
}

export const trackerSettings = (stateManager: SourceStateManager): DUINavigationButton => {
    return App.createDUINavigationButton({
        id: 'tracker_settings',
        label: 'Tracker Settings',
        form: App.createDUIForm({
            sections: () => {
                return Promise.resolve([
                    App.createDUISection({
                        id: 'status_settings',
                        header: 'Status Settings',
                        isHidden: false,
                        rows: async () => [
                            App.createDUISelect({
                                id: 'defaultStatus',
                                label: 'Default Status',
                                allowsMultiselect: false,
                                value: App.createDUIBinding({
                                    get: () => getDefaultStatus(stateManager),
                                    set: async (newValue) => await stateManager.store('defaultStatus', newValue)
                                }),
                                labelResolver: async (value) => {
                                    switch (value) {
                                        case 'CURRENT': return 'Reading'
                                        case 'PLANNING': return 'Planned'
                                        case 'COMPLETED': return 'Completed'
                                        case 'DROPPED': return 'Dropped'
                                        case 'PAUSED': return 'On-Hold'
                                        case 'REPEATING': return 'Re-Reading'
                                        default: return 'None'
                                    }
                                },
                                options: [
                                    'NONE',
                                    'CURRENT',
                                    'PLANNING',
                                    'COMPLETED',
                                    'DROPPED',
                                    'PAUSED',
                                    'REPEATING'
                                ]
                            })
                        ]
                    }),
                    App.createDUISection({
                        id: 'privacy_settings',
                        header: 'Privacy Settings',
                        isHidden: false,
                        rows: async () => [
                            App.createDUISelect({
                                id: 'defaultPrivate',
                                label: 'Private by Default',
                                allowsMultiselect: false,
                                value: App.createDUIBinding({
                                    get: () => getDefaultPrivate(stateManager),
                                    set: async (newValue) => await stateManager.store('defaultPrivate', newValue)
                                }),
                                labelResolver: async (value) => {
                                    switch (value) {
                                        case 'ALWAYS': return 'Always'
                                        case 'ADULTONLY': return 'Adult Only'
                                        default: return 'Never'
                                    }
                                },
                                options: [
                                    'NEVER',
                                    'ADULTONLY',
                                    'ALWAYS'
                                ]
                            }),
                            App.createDUISelect({
                                id: 'defaultHideFromActivity',
                                label: 'Hide from Activity by Default',
                                allowsMultiselect: false,
                                value: App.createDUIBinding({
                                    get: () => getDefaultHideFromActivity(stateManager),
                                    set: async (newValue) => await stateManager.store('defaultHideFromActivity', newValue)
                                }),
                                labelResolver: async (value) => {
                                    switch (value) {
                                        case 'ALWAYS': return 'Always'
                                        case 'ADULTONLY': return 'Adult Only'
                                        default: return 'Never'
                                    }
                                },
                                options: [
                                    'NEVER',
                                    'ADULTONLY',
                                    'ALWAYS'
                                ]
                            })
                        ]
                    })
                ])
            }
        })
    })
}
