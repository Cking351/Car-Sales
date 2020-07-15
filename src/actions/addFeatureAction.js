export const ADD_FEATURES = "ADD_FEATURES"

export const addFeature = (feature) => {
    return {type: ADD_FEATURES, payload: feature}
}