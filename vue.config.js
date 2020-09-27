module.exports = {
    devServer: {
        open: false
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/_variable.scss";`
            }
        }
    }
}