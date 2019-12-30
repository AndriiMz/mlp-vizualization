const SET_ALERT = 'setAlert';

const disableLastAlert = (state) => {
    setTimeout(() => {
        state.alerts.pop();
    }, 3000);
};

const state = {
    alerts: []
};

const getters = {
    alerts(state) {
        return state.alerts;
    }
};

const actions = {
    alert(context, msg) {
        context.commit(SET_ALERT, msg);
    }
};

const mutations = {
    [SET_ALERT](state, data) {
        state.alerts.push(data);

        disableLastAlert(state);
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
