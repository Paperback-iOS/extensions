import {
    DUINavigationButton,
    SourceStateManager
} from '@paperback/types'

export const getDefaultStatus = async (stateManager: SourceStateManager): Promise<string[]> => {
    return (await stateManager.retrieve('defaultStatus') as string[]) ?? ['NONE']
}
export const trackerSettings = (stateManager: SourceStateManager): DUINavigationButton => {
    return App.createDUINavigationButton({
        id: 'tracker_settings',
        label: 'Tracker Settings',
        form: App.createDUIForm({
            sections: () => {
                return Promise.resolve([
                    App.createDUISection({
                        id: 'settings',
                        isHidden: false,
                        header: 'Status Settings',
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
                                        case 'reading': return 'Reading'
                                        case 'plan_to_read': return 'Planned'
                                        case 'completed': return 'Completed'
                                        case 'dropped': return 'Dropped'
                                        case 'on_hold': return 'On-Hold'
                                        default: return 'None'
                                    }
                                },
                                options: [
                                    'NONE',
                                    'reading',
                                    'plan_to_read',
                                    'completed',
                                    'dropped',
                                    'on_hold'
                                ]
                            })
                        ]
                    })
                ])
            }
        })
    })
}