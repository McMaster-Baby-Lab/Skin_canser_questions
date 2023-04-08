/****************************** 
 * Skin_Canser_Questions Test *
 ******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Skin_canser_questions';  // from the Builder filename that created this script
let expInfo = {
    '': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('#8c8c8c'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(StartRoutineBegin());
flowScheduler.add(StartRoutineEachFrame());
flowScheduler.add(StartRoutineEnd());
flowScheduler.add(QuestionnaireRoutineBegin());
flowScheduler.add(QuestionnaireRoutineEachFrame());
flowScheduler.add(QuestionnaireRoutineEnd());
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const originalFaceTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(originalFaceTrialsLoopBegin(originalFaceTrialsLoopScheduler));
flowScheduler.add(originalFaceTrialsLoopScheduler);
flowScheduler.add(originalFaceTrialsLoopEnd);
const faceQuestionsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(faceQuestionsLoopBegin(faceQuestionsLoopScheduler));
flowScheduler.add(faceQuestionsLoopScheduler);
flowScheduler.add(faceQuestionsLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/LIP_006_M_F_N_A.png', 'path': 'images/LIP_006_M_F_N_A.png'},
    {'name': 'images/NASALTIP_CFD_AM_233_236_N.png', 'path': 'images/NASALTIP_CFD_AM_233_236_N.png'},
    {'name': 'images/FOREHEAD_CFD_WF_200_099_N.png', 'path': 'images/FOREHEAD_CFD_WF_200_099_N.png'},
    {'name': 'images/LIP_CFD_AF_231_357_N.png', 'path': 'images/LIP_CFD_AF_231_357_N.png'},
    {'name': 'images/FOREHEAD_CFD_BM_213_134_N.png', 'path': 'images/FOREHEAD_CFD_BM_213_134_N.png'},
    {'name': 'images/LCHEEK_CFD_AM_233_236_N.png', 'path': 'images/LCHEEK_CFD_AM_233_236_N.png'},
    {'name': 'images/LCHEEK_CFD_BF_214_308_N.png', 'path': 'images/LCHEEK_CFD_BF_214_308_N.png'},
    {'name': 'images/RCHEEK_035_M_F_N_A.png', 'path': 'images/RCHEEK_035_M_F_N_A.png'},
    {'name': 'images/LIP_CFD_BF_214_308_N.png', 'path': 'images/LIP_CFD_BF_214_308_N.png'},
    {'name': 'images/FOREHEAD_CFD_AM_233_236_N.png', 'path': 'images/FOREHEAD_CFD_AM_233_236_N.png'},
    {'name': 'images/NASALTIP_CFD_AF_231_357_N.png', 'path': 'images/NASALTIP_CFD_AF_231_357_N.png'},
    {'name': 'images/RCHEEK_CFD_LF_224_176_N.png', 'path': 'images/RCHEEK_CFD_LF_224_176_N.png'},
    {'name': 'images/NASALTIP_CFD_AF_237_223_N.png', 'path': 'images/NASALTIP_CFD_AF_237_223_N.png'},
    {'name': 'images/FOREHEAD_CFD_WF_002_004_N.png', 'path': 'images/FOREHEAD_CFD_WF_002_004_N.png'},
    {'name': 'images/LIP_CFD_WF_002_004_N.png', 'path': 'images/LIP_CFD_WF_002_004_N.png'},
    {'name': 'images/LIP_CFD_WF_250_167_N.png', 'path': 'images/LIP_CFD_WF_250_167_N.png'},
    {'name': 'images/LIP_CFD_WM_212_097_N.png', 'path': 'images/LIP_CFD_WM_212_097_N.png'},
    {'name': 'images/RCHEEK_CFD_AF_237_223_N.png', 'path': 'images/RCHEEK_CFD_AF_237_223_N.png'},
    {'name': 'images/FOREHEAD_CFD_AF_237_223_N.png', 'path': 'images/FOREHEAD_CFD_AF_237_223_N.png'},
    {'name': 'images/LCHEEK_CFD_BM_234_172_N.png', 'path': 'images/LCHEEK_CFD_BM_234_172_N.png'},
    {'name': 'images/NASALTIP_087_M_M_N_A.png', 'path': 'images/NASALTIP_087_M_M_N_A.png'},
    {'name': 'images/LCHEEK_CFD_AF_245_143_N.png', 'path': 'images/LCHEEK_CFD_AF_245_143_N.png'},
    {'name': 'images/NASALTIP_CFD_WF_200_099_N.png', 'path': 'images/NASALTIP_CFD_WF_200_099_N.png'},
    {'name': 'faceImages.xlsx', 'path': 'faceImages.xlsx'},
    {'name': 'images/NASALTIP_CFD_LM_203_026_N.png', 'path': 'images/NASALTIP_CFD_LM_203_026_N.png'},
    {'name': 'images/LCHEEK_CFD_LM_201_057_N.png', 'path': 'images/LCHEEK_CFD_LM_201_057_N.png'},
    {'name': 'images/RCHEEK_CFD_LM_201_057_N.png', 'path': 'images/RCHEEK_CFD_LM_201_057_N.png'},
    {'name': 'Picture1-eng.png', 'path': 'Picture1-eng.png'},
    {'name': 'images/NASALTIP_CFD_LM_201_057_N.png', 'path': 'images/NASALTIP_CFD_LM_201_057_N.png'},
    {'name': 'images/LIP_CFD_BM_213_134_N.png', 'path': 'images/LIP_CFD_BM_213_134_N.png'},
    {'name': 'images/RCHEEK_CFD_BF_224_002_N.png', 'path': 'images/RCHEEK_CFD_BF_224_002_N.png'},
    {'name': 'images/RCHEEK_CFD_BM_234_172_N.png', 'path': 'images/RCHEEK_CFD_BM_234_172_N.png'},
    {'name': 'images/FOREHEAD_136_M_M_N_A.png', 'path': 'images/FOREHEAD_136_M_M_N_A.png'},
    {'name': 'images/LCHEEK_CFD_BM_213_134_N.png', 'path': 'images/LCHEEK_CFD_BM_213_134_N.png'},
    {'name': 'images/LIP_CFD_AF_245_143_N.png', 'path': 'images/LIP_CFD_AF_245_143_N.png'},
    {'name': 'Rating_BlockOrder.xlsx', 'path': 'Rating_BlockOrder.xlsx'},
    {'name': 'images/LIP_136_M_M_N_A.png', 'path': 'images/LIP_136_M_M_N_A.png'},
    {'name': 'images/NASALTIP_CFD_BF_214_308_N.png', 'path': 'images/NASALTIP_CFD_BF_214_308_N.png'},
    {'name': 'images/LCHEEK_CFD_AF_237_223_N.png', 'path': 'images/LCHEEK_CFD_AF_237_223_N.png'},
    {'name': 'images/RCHEEK_CFD_WF_002_004_N.png', 'path': 'images/RCHEEK_CFD_WF_002_004_N.png'},
    {'name': 'images/LCHEEK_006_M_F_N_A.png', 'path': 'images/LCHEEK_006_M_F_N_A.png'},
    {'name': 'images/FOREHEAD_006_M_F_N_A.png', 'path': 'images/FOREHEAD_006_M_F_N_A.png'},
    {'name': 'images/NASALTIP_006_M_F_N_A.png', 'path': 'images/NASALTIP_006_M_F_N_A.png'},
    {'name': 'images/RCHEEK_CFD_AF_245_143_N.png', 'path': 'images/RCHEEK_CFD_AF_245_143_N.png'},
    {'name': 'images/NASALTIP_CFD_BM_213_134_N.png', 'path': 'images/NASALTIP_CFD_BM_213_134_N.png'},
    {'name': 'images/FOREHEAD_CFD_LM_201_057_N.png', 'path': 'images/FOREHEAD_CFD_LM_201_057_N.png'},
    {'name': 'images/FOREHEAD_035_M_F_N_A.png', 'path': 'images/FOREHEAD_035_M_F_N_A.png'},
    {'name': 'images/NASALTIP_CFD_BF_224_002_N.png', 'path': 'images/NASALTIP_CFD_BF_224_002_N.png'},
    {'name': 'images/FOREHEAD_CFD_BF_224_002_N.png', 'path': 'images/FOREHEAD_CFD_BF_224_002_N.png'},
    {'name': 'images/NASALTIP_136_M_M_N_A.png', 'path': 'images/NASALTIP_136_M_M_N_A.png'},
    {'name': 'images/FOREHEAD_CFD_WM_212_097_N.png', 'path': 'images/FOREHEAD_CFD_WM_212_097_N.png'},
    {'name': 'images/FOREHEAD_CFD_BF_214_308_N.png', 'path': 'images/FOREHEAD_CFD_BF_214_308_N.png'},
    {'name': 'images/LCHEEK_CFD_LF_224_176_N.png', 'path': 'images/LCHEEK_CFD_LF_224_176_N.png'},
    {'name': 'images/LIP_CFD_AF_237_223_N.png', 'path': 'images/LIP_CFD_AF_237_223_N.png'},
    {'name': 'images/LIP_CFD_BF_224_002_N.png', 'path': 'images/LIP_CFD_BF_224_002_N.png'},
    {'name': 'images/RCHEEK_087_M_M_N_A.png', 'path': 'images/RCHEEK_087_M_M_N_A.png'},
    {'name': 'images/FOREHEAD_CFD_AF_245_143_N.png', 'path': 'images/FOREHEAD_CFD_AF_245_143_N.png'},
    {'name': 'images/LCHEEK_CFD_BF_224_002_N.png', 'path': 'images/LCHEEK_CFD_BF_224_002_N.png'},
    {'name': 'images/RCHEEK_136_M_M_N_A.png', 'path': 'images/RCHEEK_136_M_M_N_A.png'},
    {'name': 'images/LIP_CFD_LF_224_176_N.png', 'path': 'images/LIP_CFD_LF_224_176_N.png'},
    {'name': 'images/FOREHEAD_CFD_AF_231_357_N.png', 'path': 'images/FOREHEAD_CFD_AF_231_357_N.png'},
    {'name': 'images/LCHEEK_CFD_AF_231_357_N.png', 'path': 'images/LCHEEK_CFD_AF_231_357_N.png'},
    {'name': 'images/NASALTIP_CFD_WF_002_004_N.png', 'path': 'images/NASALTIP_CFD_WF_002_004_N.png'},
    {'name': 'images/LCHEEK_CFD_WF_250_167_N.png', 'path': 'images/LCHEEK_CFD_WF_250_167_N.png'},
    {'name': 'images/LCHEEK_CFD_WF_002_004_N.png', 'path': 'images/LCHEEK_CFD_WF_002_004_N.png'},
    {'name': 'images/RCHEEK_CFD_AM_233_236_N.png', 'path': 'images/RCHEEK_CFD_AM_233_236_N.png'},
    {'name': 'images/FOREHEAD_CFD_LM_203_026_N.png', 'path': 'images/FOREHEAD_CFD_LM_203_026_N.png'},
    {'name': 'images/LCHEEK_035_M_F_N_A.png', 'path': 'images/LCHEEK_035_M_F_N_A.png'},
    {'name': 'images/LIP_087_M_M_N_A.png', 'path': 'images/LIP_087_M_M_N_A.png'},
    {'name': 'images/LIP_CFD_WF_200_099_N.png', 'path': 'images/LIP_CFD_WF_200_099_N.png'},
    {'name': 'images/LCHEEK_CFD_WM_212_097_N.png', 'path': 'images/LCHEEK_CFD_WM_212_097_N.png'},
    {'name': 'images/RCHEEK_CFD_AF_231_357_N.png', 'path': 'images/RCHEEK_CFD_AF_231_357_N.png'},
    {'name': 'images/LIP_035_M_F_N_A.png', 'path': 'images/LIP_035_M_F_N_A.png'},
    {'name': 'images/NASALTIP_CFD_WM_212_097_N.png', 'path': 'images/NASALTIP_CFD_WM_212_097_N.png'},
    {'name': 'images/RCHEEK_CFD_WF_200_099_N.png', 'path': 'images/RCHEEK_CFD_WF_200_099_N.png'},
    {'name': 'images/NASALTIP_CFD_WF_250_167_N.png', 'path': 'images/NASALTIP_CFD_WF_250_167_N.png'},
    {'name': 'images/NASALTIP_CFD_LF_224_176_N.png', 'path': 'images/NASALTIP_CFD_LF_224_176_N.png'},
    {'name': 'images/FOREHEAD_CFD_LF_224_176_N.png', 'path': 'images/FOREHEAD_CFD_LF_224_176_N.png'},
    {'name': 'images/FOREHEAD_CFD_BM_234_172_N.png', 'path': 'images/FOREHEAD_CFD_BM_234_172_N.png'},
    {'name': 'images/NASALTIP_CFD_AF_245_143_N.png', 'path': 'images/NASALTIP_CFD_AF_245_143_N.png'},
    {'name': 'images/LCHEEK_087_M_M_N_A.png', 'path': 'images/LCHEEK_087_M_M_N_A.png'},
    {'name': 'images/RCHEEK_CFD_BM_213_134_N.png', 'path': 'images/RCHEEK_CFD_BM_213_134_N.png'},
    {'name': 'images/LIP_CFD_BM_234_172_N.png', 'path': 'images/LIP_CFD_BM_234_172_N.png'},
    {'name': 'images/LCHEEK_CFD_WF_200_099_N.png', 'path': 'images/LCHEEK_CFD_WF_200_099_N.png'},
    {'name': 'images/LIP_CFD_LM_203_026_N.png', 'path': 'images/LIP_CFD_LM_203_026_N.png'},
    {'name': 'images/NASALTIP_CFD_BM_234_172_N.png', 'path': 'images/NASALTIP_CFD_BM_234_172_N.png'},
    {'name': 'images/NASALTIP_035_M_F_N_A.png', 'path': 'images/NASALTIP_035_M_F_N_A.png'},
    {'name': 'images/FOREHEAD_087_M_M_N_A.png', 'path': 'images/FOREHEAD_087_M_M_N_A.png'},
    {'name': 'images/RCHEEK_CFD_BF_214_308_N.png', 'path': 'images/RCHEEK_CFD_BF_214_308_N.png'},
    {'name': 'images/FOREHEAD_CFD_WF_250_167_N.png', 'path': 'images/FOREHEAD_CFD_WF_250_167_N.png'},
    {'name': 'images/LCHEEK_CFD_LM_203_026_N.png', 'path': 'images/LCHEEK_CFD_LM_203_026_N.png'},
    {'name': 'images/RCHEEK_CFD_WF_250_167_N.png', 'path': 'images/RCHEEK_CFD_WF_250_167_N.png'},
    {'name': 'images/LIP_CFD_LM_201_057_N.png', 'path': 'images/LIP_CFD_LM_201_057_N.png'},
    {'name': 'images/RCHEEK_CFD_WM_212_097_N.png', 'path': 'images/RCHEEK_CFD_WM_212_097_N.png'},
    {'name': 'images/RCHEEK_006_M_F_N_A.png', 'path': 'images/RCHEEK_006_M_F_N_A.png'},
    {'name': 'images/RCHEEK_CFD_LM_203_026_N.png', 'path': 'images/RCHEEK_CFD_LM_203_026_N.png'},
    {'name': 'images/LIP_CFD_AM_233_236_N.png', 'path': 'images/LIP_CFD_AM_233_236_N.png'},
    {'name': 'images/LCHEEK_136_M_M_N_A.png', 'path': 'images/LCHEEK_136_M_M_N_A.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=C13Q10VB', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["Name"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "Start"
  StartClock = new util.Clock();
  ques_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'ques_instr',
    text: ((("Thank you for taking the time to participate in this questionnaire. We hope these short questions will not take more than a few moments of your time. All answers will be anonymized. Reponses will remain completely confidential and will be used solely for the purposes of this study." + " \n Certain skin cancers of the face can be managed with either surgery and/or radiation. Various patient- and clinician-specific factors may influence a physician\u2019s intervention modality. ") + "\n This questionnaire will comprise of three sections. After collecting relevant background information, we will present you several faces with skin cancers and ask you to indicate how likely you are to manage these lesions via radiation and/or surgery. There will be a short debriefing session at the end of the questionnaire. ") + "\n Please click anywhere to start."),
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "Questionnaire"
  QuestionnaireClock = new util.Clock();
  slider_rad_therapy = new visual.Slider({
    win: psychoJS.window, name: 'slider_rad_therapy',
    startValue: 3,
    size: [1.0, 0.1], pos: [0, 0.1], ori: 0.0, units: 'height',
    labels: ["Very frequently", "Frequently", "Occasionally", "Rarely", "Never"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 0.0, style: ["RATING", "LABELS_45"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  text_rad_therapy = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_rad_therapy',
    text: 'How often do you consider referral to radiation therapy for basal cell skin cancers?  ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  slider_surgery = new visual.Slider({
    win: psychoJS.window, name: 'slider_surgery',
    startValue: 3,
    size: [1.0, 0.1], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["Very frequently", "Frequently", "Occasionally", "Rarely", "Never"], fontSize: 0.03, ticks: [1, 2, 3, 4, 5],
    granularity: 0.0, style: ["RATING", "LABELS_45"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_surgery = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_surgery',
    text: 'How often do you consider surgical excision for basal cell skin cancers?  ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'Picture1-eng.png', mask : undefined,
    ori : 0.0, pos : [0.7, (- 0.4)], size : [0.2, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instrBlock = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrBlock',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "RatingTrial"
  RatingTrialClock = new util.Clock();
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  // Initialize components for Routine "FaceQuestions"
  FaceQuestionsClock = new util.Clock();
  face_image_q = new visual.ImageStim({
    win : psychoJS.window,
    name : 'face_image_q', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0.3], size : undefined,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  slider_trustworthy = new visual.Slider({
    win: psychoJS.window, name: 'slider_trustworthy',
    startValue: undefined,
    size: [1.0, 0.025], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["Never trustworthy", "Rarely trustworthy", "Occasionally trustworthy", "Frequently aggressive", "Always aggressive"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  text_trustworthy = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_trustworthy',
    text: 'How trustworthy would you judge this patient to be?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  slider_aggressive = new visual.Slider({
    win: psychoJS.window, name: 'slider_aggressive',
    startValue: undefined,
    size: [1.0, 0.025], pos: [0, (- 0.25)], ori: 0.0, units: 'height',
    labels: ["Never aggressive", "Rarely aggressive", "Rarely aggressive", "Frequently aggressive", "Always aggressive"], fontSize: 0.02, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  text_aggressive = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_aggressive',
    text: 'How aggressive would you judge this individual to be? ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  Confirm = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Confirm', units : undefined, 
    image : 'Picture1-eng.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.2, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  // Initialize components for Routine "ITI2"
  ITI2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  EndText = new visual.TextStim({
    win: psychoJS.window,
    name: 'EndText',
    text: 'Thank you for participating in this study. Below will summarize the study goals. \n\nEarly-stage, low-risk basal cell skin cancer generally portends favourable outcomes and may be readily managed with either a surgical approach or through radiation therapy. Considering both approaches can often be considered, the goal of this study was to better understand the clinical rationale for utilizing one treatment approach over the other. \n\nYour participation in this study is very much appreciated. Please do not hesitate to contact us if you have further questions.\n\nDr. Michael Gupta, MD MSc FRCSC\n\nAssociate Professor\nDepartment of Otolaryngology, Head and Neck Surgery\nMcMaster University\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  mouse_8 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_8.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function StartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Start' ---
    t = 0;
    StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    StartComponents = [];
    StartComponents.push(ques_instr);
    StartComponents.push(mouse_4);
    
    for (const thisComponent of StartComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function StartRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Start' ---
    // get current time
    t = StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ques_instr* updates
    if (t >= 0.0 && ques_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ques_instr.tStart = t;  // (not accounting for frame time here)
      ques_instr.frameNStart = frameN;  // exact frame index
      
      ques_instr.setAutoDraw(true);
    }

    // *mouse_4* updates
    if (t >= 0.5 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [ques_instr]) {
            if (obj.contains(mouse_4)) {
              gotValidClick = true;
              mouse_4.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_4.getPos();
          mouse_4.x.push(_mouseXYs[0]);
          mouse_4.y.push(_mouseXYs[1]);
          mouse_4.leftButton.push(_mouseButtons[0]);
          mouse_4.midButton.push(_mouseButtons[1]);
          mouse_4.rightButton.push(_mouseButtons[2]);
          mouse_4.time.push(mouse_4.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of StartComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function StartRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Start' ---
    for (const thisComponent of StartComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_4.x) {  psychoJS.experiment.addData('mouse_4.x', mouse_4.x[0])};
    if (mouse_4.y) {  psychoJS.experiment.addData('mouse_4.y', mouse_4.y[0])};
    if (mouse_4.leftButton) {  psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton[0])};
    if (mouse_4.midButton) {  psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton[0])};
    if (mouse_4.rightButton) {  psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton[0])};
    if (mouse_4.time) {  psychoJS.experiment.addData('mouse_4.time', mouse_4.time[0])};
    if (mouse_4.clicked_name) {  psychoJS.experiment.addData('mouse_4.clicked_name', mouse_4.clicked_name[0])};
    
    // the Routine "Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function QuestionnaireRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Questionnaire' ---
    t = 0;
    QuestionnaireClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider_rad_therapy.reset()
    slider_surgery.reset()
    // setup some python lists for storing info about the mouse_6
    // current position of the mouse:
    mouse_6.x = [];
    mouse_6.y = [];
    mouse_6.leftButton = [];
    mouse_6.midButton = [];
    mouse_6.rightButton = [];
    mouse_6.time = [];
    mouse_6.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    QuestionnaireComponents = [];
    QuestionnaireComponents.push(slider_rad_therapy);
    QuestionnaireComponents.push(text_rad_therapy);
    QuestionnaireComponents.push(slider_surgery);
    QuestionnaireComponents.push(text_surgery);
    QuestionnaireComponents.push(image);
    QuestionnaireComponents.push(mouse_6);
    
    for (const thisComponent of QuestionnaireComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function QuestionnaireRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Questionnaire' ---
    // get current time
    t = QuestionnaireClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_rad_therapy* updates
    if (t >= 0 && slider_rad_therapy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_rad_therapy.tStart = t;  // (not accounting for frame time here)
      slider_rad_therapy.frameNStart = frameN;  // exact frame index
      
      slider_rad_therapy.setAutoDraw(true);
    }

    
    // *text_rad_therapy* updates
    if (t >= 0.0 && text_rad_therapy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_rad_therapy.tStart = t;  // (not accounting for frame time here)
      text_rad_therapy.frameNStart = frameN;  // exact frame index
      
      text_rad_therapy.setAutoDraw(true);
    }

    
    // *slider_surgery* updates
    if (t >= 0 && slider_surgery.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_surgery.tStart = t;  // (not accounting for frame time here)
      slider_surgery.frameNStart = frameN;  // exact frame index
      
      slider_surgery.setAutoDraw(true);
    }

    
    // *text_surgery* updates
    if (t >= 0.0 && text_surgery.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_surgery.tStart = t;  // (not accounting for frame time here)
      text_surgery.frameNStart = frameN;  // exact frame index
      
      text_surgery.setAutoDraw(true);
    }

    
    // *image* updates
    if (t >= 0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    // *mouse_6* updates
    if (t >= 0.0 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [image]) {
            if (obj.contains(mouse_6)) {
              gotValidClick = true;
              mouse_6.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_6.getPos();
          mouse_6.x.push(_mouseXYs[0]);
          mouse_6.y.push(_mouseXYs[1]);
          mouse_6.leftButton.push(_mouseButtons[0]);
          mouse_6.midButton.push(_mouseButtons[1]);
          mouse_6.rightButton.push(_mouseButtons[2]);
          mouse_6.time.push(mouse_6.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of QuestionnaireComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function QuestionnaireRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Questionnaire' ---
    for (const thisComponent of QuestionnaireComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_rad_therapy.response', slider_rad_therapy.getRating());
    psychoJS.experiment.addData('slider_rad_therapy.rt', slider_rad_therapy.getRT());
    psychoJS.experiment.addData('slider_surgery.response', slider_surgery.getRating());
    psychoJS.experiment.addData('slider_surgery.rt', slider_surgery.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_6.x) {  psychoJS.experiment.addData('mouse_6.x', mouse_6.x[0])};
    if (mouse_6.y) {  psychoJS.experiment.addData('mouse_6.y', mouse_6.y[0])};
    if (mouse_6.leftButton) {  psychoJS.experiment.addData('mouse_6.leftButton', mouse_6.leftButton[0])};
    if (mouse_6.midButton) {  psychoJS.experiment.addData('mouse_6.midButton', mouse_6.midButton[0])};
    if (mouse_6.rightButton) {  psychoJS.experiment.addData('mouse_6.rightButton', mouse_6.rightButton[0])};
    if (mouse_6.time) {  psychoJS.experiment.addData('mouse_6.time', mouse_6.time[0])};
    if (mouse_6.clicked_name) {  psychoJS.experiment.addData('mouse_6.clicked_name', mouse_6.clicked_name[0])};
    
    // the Routine "Questionnaire" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction' ---
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instrBlock.setText('Each patient below has been diagnosed with a low-risk, non-sclerosing, early-stage basal cell skin cancer. The patients are otherwise in good health. For each face, please indicate how likely you would be to recommend surgery versus radiation in the management of each lesion. \nPlease click anywhere to start');
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instrBlock);
    instructionComponents.push(mouse);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction' ---
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrBlock* updates
    if (t >= 0.0 && instrBlock.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrBlock.tStart = t;  // (not accounting for frame time here)
      instrBlock.frameNStart = frameN;  // exact frame index
      
      instrBlock.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.5 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [instrBlock]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction' ---
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);}
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function originalFaceTrialsLoopBegin(originalFaceTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    originalFaceTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'faceImages.xlsx',
      seed: undefined, name: 'originalFaceTrials'
    });
    psychoJS.experiment.addLoop(originalFaceTrials); // add the loop to the experiment
    currentLoop = originalFaceTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisOriginalFaceTrial of originalFaceTrials) {
      snapshot = originalFaceTrials.getSnapshot();
      originalFaceTrialsLoopScheduler.add(importConditions(snapshot));
      originalFaceTrialsLoopScheduler.add(RatingTrialRoutineBegin(snapshot));
      originalFaceTrialsLoopScheduler.add(RatingTrialRoutineEachFrame());
      originalFaceTrialsLoopScheduler.add(RatingTrialRoutineEnd(snapshot));
      originalFaceTrialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      originalFaceTrialsLoopScheduler.add(ITIRoutineEachFrame());
      originalFaceTrialsLoopScheduler.add(ITIRoutineEnd(snapshot));
      originalFaceTrialsLoopScheduler.add(originalFaceTrialsLoopEndIteration(originalFaceTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function originalFaceTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(originalFaceTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function originalFaceTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function faceQuestionsLoopBegin(faceQuestionsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    faceQuestions = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Rating_BlockOrder.xlsx',
      seed: undefined, name: 'faceQuestions'
    });
    psychoJS.experiment.addLoop(faceQuestions); // add the loop to the experiment
    currentLoop = faceQuestions;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFaceQuestion of faceQuestions) {
      snapshot = faceQuestions.getSnapshot();
      faceQuestionsLoopScheduler.add(importConditions(snapshot));
      faceQuestionsLoopScheduler.add(FaceQuestionsRoutineBegin(snapshot));
      faceQuestionsLoopScheduler.add(FaceQuestionsRoutineEachFrame());
      faceQuestionsLoopScheduler.add(FaceQuestionsRoutineEnd(snapshot));
      faceQuestionsLoopScheduler.add(ITI2RoutineBegin(snapshot));
      faceQuestionsLoopScheduler.add(ITI2RoutineEachFrame());
      faceQuestionsLoopScheduler.add(ITI2RoutineEnd(snapshot));
      faceQuestionsLoopScheduler.add(faceQuestionsLoopEndIteration(faceQuestionsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function faceQuestionsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(faceQuestions);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function faceQuestionsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function RatingTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'RatingTrial' ---
    t = 0;
    RatingTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    RatingTrialComponents = [];
    
    for (const thisComponent of RatingTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function RatingTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'RatingTrial' ---
    // get current time
    t = RatingTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RatingTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function RatingTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'RatingTrial' ---
    for (const thisComponent of RatingTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "RatingTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ITI' ---
    t = 0;
    ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    ITIComponents = [];
    
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ITIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ITI' ---
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ITIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ITI' ---
    for (const thisComponent of ITIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function FaceQuestionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'FaceQuestions' ---
    t = 0;
    FaceQuestionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    positionNext2 = [0, (- 0.9)];
    
    face_image_q.setImage(faceImages_q);
    slider_trustworthy.reset()
    slider_aggressive.reset()
    // setup some python lists for storing info about the mouse_7
    // current position of the mouse:
    mouse_7.x = [];
    mouse_7.y = [];
    mouse_7.leftButton = [];
    mouse_7.midButton = [];
    mouse_7.rightButton = [];
    mouse_7.time = [];
    mouse_7.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    FaceQuestionsComponents = [];
    FaceQuestionsComponents.push(face_image_q);
    FaceQuestionsComponents.push(slider_trustworthy);
    FaceQuestionsComponents.push(text_trustworthy);
    FaceQuestionsComponents.push(slider_aggressive);
    FaceQuestionsComponents.push(text_aggressive);
    FaceQuestionsComponents.push(Confirm);
    FaceQuestionsComponents.push(mouse_7);
    
    for (const thisComponent of FaceQuestionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function FaceQuestionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'FaceQuestions' ---
    // get current time
    t = FaceQuestionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_3
    if ((slider_trustworthy.getRating() && slider_aggressive.getRating())) {
        positionNext2 = [0, (- 0.4)];
    } else {
        positionNext2 = [0, (- 0.9)];
    }
    
    
    // *face_image_q* updates
    if (t >= 0.0 && face_image_q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      face_image_q.tStart = t;  // (not accounting for frame time here)
      face_image_q.frameNStart = frameN;  // exact frame index
      
      face_image_q.setAutoDraw(true);
    }

    
    // *slider_trustworthy* updates
    if (t >= 0.3 && slider_trustworthy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_trustworthy.tStart = t;  // (not accounting for frame time here)
      slider_trustworthy.frameNStart = frameN;  // exact frame index
      
      slider_trustworthy.setAutoDraw(true);
    }

    
    // *text_trustworthy* updates
    if (t >= 0.3 && text_trustworthy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_trustworthy.tStart = t;  // (not accounting for frame time here)
      text_trustworthy.frameNStart = frameN;  // exact frame index
      
      text_trustworthy.setAutoDraw(true);
    }

    
    // *slider_aggressive* updates
    if (t >= 0.3 && slider_aggressive.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_aggressive.tStart = t;  // (not accounting for frame time here)
      slider_aggressive.frameNStart = frameN;  // exact frame index
      
      slider_aggressive.setAutoDraw(true);
    }

    
    // *text_aggressive* updates
    if (t >= 0.3 && text_aggressive.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_aggressive.tStart = t;  // (not accounting for frame time here)
      text_aggressive.frameNStart = frameN;  // exact frame index
      
      text_aggressive.setAutoDraw(true);
    }

    
    // *Confirm* updates
    if (t >= 0.3 && Confirm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Confirm.tStart = t;  // (not accounting for frame time here)
      Confirm.frameNStart = frameN;  // exact frame index
      
      Confirm.setAutoDraw(true);
    }

    
    if (Confirm.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Confirm.setPos(positionNext2, false);
    }
    // *mouse_7* updates
    if (t >= 0.3 && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [Confirm,]) {
            if (obj.contains(mouse_7)) {
              gotValidClick = true;
              mouse_7.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_7.getPos();
          mouse_7.x.push(_mouseXYs[0]);
          mouse_7.y.push(_mouseXYs[1]);
          mouse_7.leftButton.push(_mouseButtons[0]);
          mouse_7.midButton.push(_mouseButtons[1]);
          mouse_7.rightButton.push(_mouseButtons[2]);
          mouse_7.time.push(mouse_7.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FaceQuestionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function FaceQuestionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'FaceQuestions' ---
    for (const thisComponent of FaceQuestionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_trustworthy.response', slider_trustworthy.getRating());
    psychoJS.experiment.addData('slider_trustworthy.rt', slider_trustworthy.getRT());
    psychoJS.experiment.addData('slider_aggressive.response', slider_aggressive.getRating());
    psychoJS.experiment.addData('slider_aggressive.rt', slider_aggressive.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_7.x) {  psychoJS.experiment.addData('mouse_7.x', mouse_7.x[0])};
    if (mouse_7.y) {  psychoJS.experiment.addData('mouse_7.y', mouse_7.y[0])};
    if (mouse_7.leftButton) {  psychoJS.experiment.addData('mouse_7.leftButton', mouse_7.leftButton[0])};
    if (mouse_7.midButton) {  psychoJS.experiment.addData('mouse_7.midButton', mouse_7.midButton[0])};
    if (mouse_7.rightButton) {  psychoJS.experiment.addData('mouse_7.rightButton', mouse_7.rightButton[0])};
    if (mouse_7.time) {  psychoJS.experiment.addData('mouse_7.time', mouse_7.time[0])};
    if (mouse_7.clicked_name) {  psychoJS.experiment.addData('mouse_7.clicked_name', mouse_7.clicked_name[0])};
    
    // the Routine "FaceQuestions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ITI2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ITI2' ---
    t = 0;
    ITI2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    import * as random from 'random';
    var jitter;
    jitter = random.uniform(0.5, 1.0);
    psychoJS.experiment.addData("ITI", jitter);
    
    // keep track of which components have finished
    ITI2Components = [];
    ITI2Components.push(text_2);
    
    for (const thisComponent of ITI2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ITI2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ITI2' ---
    // get current time
    t = ITI2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + jitter - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ITI2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ITI2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ITI2' ---
    for (const thisComponent of ITI2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "ITI2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_8
    // current position of the mouse:
    mouse_8.x = [];
    mouse_8.y = [];
    mouse_8.leftButton = [];
    mouse_8.midButton = [];
    mouse_8.rightButton = [];
    mouse_8.time = [];
    mouse_8.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(EndText);
    EndComponents.push(mouse_8);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *EndText* updates
    if (t >= 0.0 && EndText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EndText.tStart = t;  // (not accounting for frame time here)
      EndText.frameNStart = frameN;  // exact frame index
      
      EndText.setAutoDraw(true);
    }

    // *mouse_8* updates
    if (t >= 0.3 && mouse_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_8.tStart = t;  // (not accounting for frame time here)
      mouse_8.frameNStart = frameN;  // exact frame index
      
      mouse_8.status = PsychoJS.Status.STARTED;
      mouse_8.mouseClock.reset();
      prevButtonState = mouse_8.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_8.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_8.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [EndText]) {
            if (obj.contains(mouse_8)) {
              gotValidClick = true;
              mouse_8.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_8.getPos();
          mouse_8.x.push(_mouseXYs[0]);
          mouse_8.y.push(_mouseXYs[1]);
          mouse_8.leftButton.push(_mouseButtons[0]);
          mouse_8.midButton.push(_mouseButtons[1]);
          mouse_8.rightButton.push(_mouseButtons[2]);
          mouse_8.time.push(mouse_8.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_8.x) {  psychoJS.experiment.addData('mouse_8.x', mouse_8.x[0])};
    if (mouse_8.y) {  psychoJS.experiment.addData('mouse_8.y', mouse_8.y[0])};
    if (mouse_8.leftButton) {  psychoJS.experiment.addData('mouse_8.leftButton', mouse_8.leftButton[0])};
    if (mouse_8.midButton) {  psychoJS.experiment.addData('mouse_8.midButton', mouse_8.midButton[0])};
    if (mouse_8.rightButton) {  psychoJS.experiment.addData('mouse_8.rightButton', mouse_8.rightButton[0])};
    if (mouse_8.time) {  psychoJS.experiment.addData('mouse_8.time', mouse_8.time[0])};
    if (mouse_8.clicked_name) {  psychoJS.experiment.addData('mouse_8.clicked_name', mouse_8.clicked_name[0])};
    
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
