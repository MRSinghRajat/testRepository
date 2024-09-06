import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'd7f6bfed59454f74ab49dede2b545aee'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'f434855b8a4a483db27e1e728cbd5262'
                    }
                }
            }
        }
    }
}
