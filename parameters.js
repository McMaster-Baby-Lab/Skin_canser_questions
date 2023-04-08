const faces = ["006_M_F_N_A.png", "035_M_F_N_A.png", "087_M_M_N_A.png", "136_M_M_N_A.png"
    , "CFD_AF_231_357_N.png", "CFD_AF_237_223_N.png", "CFD_AF_245_143_N.png", "CFD_AM_233_236_N.png"
    , "CFD_BF_214_308_N.png", "CFD_BF_224_002_N.png", "CFD_BM_213_134_N.png", "CFD_BM_234_172_N.png"
    , "CFD_LF_224_176_N.png", "CFD_LM_201_057_N.png", "CFD_LM_203_026_N.png", "CFD_WF_002_004_N.png"
    , "CFD_WF_200_099_N.png", "CFD_WF_250_167_N.png", "CFD_WM_212_097_N.png"]

var lesions = ["FOREHEAD", "LCHEEK", "LIP", "NASALTIP", "RCHEEK"];

var trials = []

faces.forEach(face => {

    lesions = lesions.sort(() => Math.random() - Math.random())

    lesions.forEach(lesion => {

        var properties = {}

        properties.lesion = lesion;
        properties.img = "images/" + lesion + "_" + face;
        properties.face = face;
        properties.order = lesions.indexOf(lesion)

        trials.push(properties)
    
    })

})

trials.sort((a, b) => (a.order > b.order) ? 1 : -1)