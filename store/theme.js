export const state = () => ({
    data: {
        dark: false,
        color: "default"
    }
})

export const actions = {
    async getTheme({ commit, dispatch }, socialclub) {
        try {
            /*if(!this.$cookies.get('dark-mode')) {
                commit('setThemeMode', true);
            } else {
                commit('setThemeMode', false);
            }*/
            //commit('setThemeMode', res.mode ? 'dark':'light');
            /*const response = await this.$axios.get(
                `https://restapi.smart-rp.com/api/v1/profile/theme/${socialclub}`,
                {},
                config
            );
            if(response.data.success) {
                let res = response.data.data;
                commit('setThemeMode', res.mode ? 'dark':'light');
                commit('setThemeColor', res.color);
                commit('setScale', res.scale);
                console.log('theme set!')
            }*/
        } catch (e) {
            console.error(e)
        }
    },
};
export const mutations = {
    setThemeMode(state, data = Boolean) {
        state.data.dark = data;
    },
    /*setThemeColor(state, data) {
        state.theme.color = data;
    },
    setScale(state, data) {
        state.theme.scale = Boolean(data);
    },
    setResolution(state, data) {
        state.theme.resolution = Boolean(data);
    },
    setSocialClub(state, data) {
        state.socialclub = data;
    },
    setLoading(state, data = Boolean) {
        state.loading = data;
    }*/
}