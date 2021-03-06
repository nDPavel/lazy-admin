export const SET_LANGUAGE = (state, value) => {
  state.language = value
}

export const SET_CUSTOMLANGUAGE = (state, value) => {
  state.custom_language = value
}

export const SET_SEARCHSCRIPTS = (state, value) => {
  state.search_scripts = value
}

export const SET_SEARCHHISTORY = (state, value) => {
  state.search_history = value
}

export const SET_SCRIPTSFILTER = (state, value) => {
  state.scripts_filter = value
}

export const SET_COMMANDMAXIMIZED = (state, value) => {
  state.command_maximized = value
}

export const SET_MASTERDEFINITION = (state, value) => {
  state.master_definition = value
}

export const REMOVE_MASTERDEFINITION = (state) => {
  state.master_definition = {}
}

export const SET_DEFINITIONS = (state, value) => {
  // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
  state.definitions = Object.assign({}, state.definitions, value)
}

export const REMOVE_DEFINITIONS = (state) => {
  state.definitions = {}
}

export const SET_UPDATEDATE = (state, value) => {
  state.update_date = value
}

export const SET_UPDATEINPROGRESS = (state, value) => {
  state.update_in_progress = value
}

export const SET_DEFINITIONSUPDATEINPROGRESS = (state, value) => {
  state.definitions_update_in_progress = value
}

export const SET_RESTARTREQUIRED = (state, value) => {
  state.restart_required = value
}

export const SET_UPDATEPROGRESS = (state, value) => {
  state.update_progress = value
}

export const SET_ALWAYSCONFIRM = (state, value) => {
  state.always_confirm = value
}

export const SET_HISTORYLENGTH = (state, value) => {
  state.history_length = value
}

export const SET_HISTORYVISIBLE = (state, value) => {
  state.history_visible = value
}

export const SET_HISTORY = (state, value) => {
  state.history.unshift(value)
  state.history.splice(state.history_length)
}

export const SET_DENSEINPUT = (state, value) => {
  state.dense_input = value
}

export const SET_DENSETABLE = (state, value) => {
  state.dense_table = value
}

export const SET_LOGINSKIPPED = (state, value) => {
  state.login_skipped = value
}

export const SET_CREDENTIALSSAVED = (state, value) => {
  state.credentials_saved = value
}

export const SET_DISPLAYPROGRESS = (state, value) => {
  state.display_progress = value
}

export const ADD_LOGGEDINSERVICES = (state, value) => {
  state.loggedin_services = Object.assign({}, state.loggedin_services, value)
}

export const CLEAR_LOGGEDINSERVICES = (state, value) => {
  state.loggedin_services = value
}

export const SET_LOGCOMMAND = (state, value) => {
  state.log_command = value
}

export const SET_LOGRESULT = (state, value) => {
  state.log_result = value
}
