
export const startLoading = (context, loaderName) => {
    context.dispatch(`loading/startLoading`, loaderName, { root: true });
};

export const endLoading = (context, loaderName) => {
    context.dispatch(`loading/endLoading`, loaderName, { root: true });
};

export const wrapLoadingCallback = (fn, context, loaderName) => {
    return (data) => {
        context.dispatch(`loading/endLoading`, loaderName, {root: true});
        return fn(data);
    };
};



export default { startLoading, endLoading, wrapLoadingCallback };