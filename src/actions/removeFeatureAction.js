export const REMOVE_FEATURES = "REMOVE_FEATURES"

export const removeFeature = (feature) => {
    return {type: REMOVE_FEATURES, payload:feature}
}