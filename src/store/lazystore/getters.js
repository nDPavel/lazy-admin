export function getLanguage (state) {
  return state.language
}

export function getCustomLanguage (state) {
  return state.custom_language
}

export function getSearchScripts (state) {
  return state.search_scripts
}

export function getSearchHistory (state) {
  return state.search_history
}

export function getScriptsFilter (state) {
  return state.scripts_filter
}

export function getCommandMaximized (state) {
  return state.command_maximized
}

export function getMasterDefinition (state) {
  return state.master_definition
}

export function getDefinitions (state) {
  return state.definitions
}

export function getUpdateDate (state) {
  return state.update_date
}

export function getUpdateInProgress (state) {
  return state.update_in_progress
}

export function getDefinitionsUpdateInProgress (state) {
  return state.definitions_update_in_progress
}

export function getRestartRequired (state) {
  return state.restart_required
}

export function getUpdateProgress (state) {
  return state.update_progress
}

export function getAlwaysConfirm (state) {
  return state.always_confirm
}

export function getHistoryLength (state) {
  return state.history_length
}

export function getHistoryVisible (state) {
  return state.history_visible
}

export function getHistory (state) {
  return state.history
}

export function getDenseInput (state) {
  return state.dense_input
}

export function getDenseTable (state) {
  return state.dense_table
}

export function getLoginSkipped (state) {
  return state.login_skipped
}

export function getCredentialsSaved (state) {
  return state.credentials_saved
}

export function getDisplayProgress (state) {
  return state.display_progress
}

export function getLoggedinServices (state) {
  return state.loggedin_services
}

export function getLogCommand (state) {
  return state.log_command
}

export function getLogResult (state) {
  return state.log_result
}

// Dynamically build array of scripts to display in ScriptsPage.vue page
export function getScriptsArray (state) {
  try {
    return Object.entries(state.definitions)
      .filter(([key, value]) => state.scripts_filter.includes(key))
      .sort(([key, value], [key2, value2]) => (key > key2) ? 1 : -1)
      .map(function ([key, value]) { return value.definition })
      .flat(1)
  } catch {
    console.error('Cannot build scripts entries.')
  }
}

// Dynamically build menu entries array of modules to display in FullLayout.vue and AboutPage.vue
export function getMenuEntries (state) {
  try {
    return Object.entries(state.definitions)
      .map(function ([key, value]) {
        return {
          name: key,
          displayName: value.displayName ? value.displayName[state.language] || value.displayName['default'] : '',
          description: value.description ? value.description[state.language] || value.description['default'] : '',
          version: value.version,
          icon: value.icon ? value.icon : 'mdi-powershell'
        }
      }).sort((a, b) => (a.displayName > b.displayName) ? 1 : -1)
  } catch {
    console.error('Cannot build menu entries.')
  }
}
