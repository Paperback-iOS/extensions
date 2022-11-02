import { DUINavigationButton,
    SourceStateManager } from '@paperback/types'
export const getdefaultStatus = async (stateManager: SourceStateManager): Promise<string[]> => {
    return (await stateManager.retrieve('defaultStatus') as string[]) ?? ['NONE']
}
export const trackerSettings = (stateManager: SourceStateManager): DUINavigationButton => {
    return App.createDUINavigationButton({
        id: 'tracker_settings',
        label: 'Tracker Settings',
        form: App.createDUIForm({
            onSubmit: async (values: any) => {
                await Promise.all([
                    stateManager.store('defaultStatus', values.defaultStatus)
                ])
            },
            sections: () => {
                return Promise.resolve([
                    App.createDUISection({
                        id: 'settings',
                        isHidden: false,
                        rows: async () => [
                            App.createDUISelect({
                                id: 'defaultStatus',
                                label: 'Default Status',
                                allowsMultiselect: false,
                                value: App.createDUIBinding({
                                    get: () => getdefaultStatus(stateManager)
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
                    })
                ])
            }
        })
    })
}
