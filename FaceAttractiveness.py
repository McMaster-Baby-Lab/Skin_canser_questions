#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on April 07, 2023, at 22:52
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
prefs.hardware['audioLib'] = 'ptb'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.5'
expName = 'FaceAttractiveness'  # from the Builder filename that created this script
expInfo = {
    'Name': '',
    'Gender': '',
    'Age': '',
    'Ethnicity': '',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['Name'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\annak\\Documents\\GitHub\\faceattractiveness_lesion\\FaceAttractiveness.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color='#8c8c8c', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "Start" ---
ques_instr = visual.TextStim(win=win, name='ques_instr',
    text="Thank you for taking the time to participate in this questionnaire. We hope these short questions will not take more than a few moments of your time. All answers will be anonymized. Reponses will remain completely confidential and will be used solely for the purposes of this study." + " \n Certain skin cancers of the face can be managed with either surgery and/or radiation. Various patient- and clinician-specific factors may influence a physician’s intervention modality. " + "\n This questionnaire will comprise of three sections. After collecting relevant background information, we will present you several faces with skin cancers and ask you to indicate how likely you are to manage these lesions via radiation and/or surgery. There will be a short debriefing session at the end of the questionnaire. " + "\n Please click anywhere to start.",
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
mouse_4 = event.Mouse(win=win)
x, y = [None, None]
mouse_4.mouseClock = core.Clock()

# --- Initialize components for Routine "Questionnaire" ---
slider_rad_therapy = visual.Slider(win=win, name='slider_rad_therapy',
    startValue=3, size=(1.0, 0.1), pos=(0, 0.1), units=None,
    labels=("Very frequently", "Frequently","Occasionally", "Rarely", "Never"), ticks=(1, 2, 3, 4, 5), granularity=0.0,
    style='rating', styleTweaks=('labels45',), opacity=None,
    labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=0, readOnly=False)
text_rad_therapy = visual.TextStim(win=win, name='text_rad_therapy',
    text='How often do you consider referral to radiation therapy for basal cell skin cancers?  ',
    font='Open Sans',
    pos=(0, 0.3), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
slider_surgery = visual.Slider(win=win, name='slider_surgery',
    startValue=3, size=(1.0, 0.1), pos=(0, -0.3), units=None,
    labels=("Very frequently", "Frequently","Occasionally", "Rarely", "Never"), ticks=(1, 2, 3, 4, 5), granularity=0.0,
    style='rating', styleTweaks=('labels45',), opacity=None,
    labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Arial', labelHeight=0.03,
    flip=False, ori=0.0, depth=-2, readOnly=False)
text_surgery = visual.TextStim(win=win, name='text_surgery',
    text='How often do you consider surgical excision for basal cell skin cancers?  ',
    font='Open Sans',
    pos=(0, -0.1), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
image = visual.ImageStim(
    win=win,
    name='image', 
    image='Picture1-eng.png', mask=None, anchor='center',
    ori=0.0, pos=(0.7, -0.4), size=(0.2, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-4.0)
mouse_6 = event.Mouse(win=win)
x, y = [None, None]
mouse_6.mouseClock = core.Clock()

# --- Initialize components for Routine "instruction" ---
instrBlock = visual.TextStim(win=win, name='instrBlock',
    text='',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# --- Initialize components for Routine "RatingTrial" ---

# --- Initialize components for Routine "ITI" ---

# --- Initialize components for Routine "FaceQuestions" ---
face_image_q = visual.ImageStim(
    win=win,
    name='face_image_q', 
    image='sin', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.3), size=None,
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
slider_trustworthy = visual.Slider(win=win, name='slider_trustworthy',
    startValue=None, size=(1.0, 0.025), pos=(0, 0), units=None,
    labels=("Never trustworthy", "Rarely trustworthy", "Occasionally trustworthy", "Frequently aggressive", "Always aggressive"), ticks=(1, 2, 3, 4, 5), granularity=1.0,
    style='radio', styleTweaks=('labels45',), opacity=None,
    labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.02,
    flip=False, ori=0.0, depth=-2, readOnly=False)
text_trustworthy = visual.TextStim(win=win, name='text_trustworthy',
    text='How trustworthy would you judge this patient to be?',
    font='Open Sans',
    pos=(0, 0.05), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
slider_aggressive = visual.Slider(win=win, name='slider_aggressive',
    startValue=None, size=(1.0, 0.025), pos=(0, -0.25), units=None,
    labels=("Never aggressive", "Rarely aggressive", "Rarely aggressive", "Frequently aggressive", "Always aggressive"), ticks=(1, 2, 3, 4, 5), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    labelColor='LightGray', markerColor='Red', lineColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.02,
    flip=False, ori=0.0, depth=-4, readOnly=False)
text_aggressive = visual.TextStim(win=win, name='text_aggressive',
    text='How aggressive would you judge this individual to be? ',
    font='Open Sans',
    pos=(0, -0.15), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
mouse_7 = event.Mouse(win=win)
x, y = [None, None]
mouse_7.mouseClock = core.Clock()
Confirm = visual.ImageStim(
    win=win,
    name='Confirm', 
    image='Picture1-eng.png', mask=None, anchor='center',
    ori=0.0, pos=positionNext2, size=(0.2, 0.1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-7.0)

# --- Initialize components for Routine "ITI2" ---
text_2 = visual.TextStim(win=win, name='text_2',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "End" ---
EndText = visual.TextStim(win=win, name='EndText',
    text='Thank you for participating in this study. Below will summarize the study goals. \n\nEarly-stage, low-risk basal cell skin cancer generally portends favourable outcomes and may be readily managed with either a surgical approach or through radiation therapy. Considering both approaches can often be considered, the goal of this study was to better understand the clinical rationale for utilizing one treatment approach over the other. \n\nYour participation in this study is very much appreciated. Please do not hesitate to contact us if you have further questions.\n\nDr. Michael Gupta, MD MSc FRCSC\n\nAssociate Professor\nDepartment of Otolaryngology, Head and Neck Surgery\nMcMaster University\n',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
mouse_8 = event.Mouse(win=win)
x, y = [None, None]
mouse_8.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "Start" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_4
mouse_4.x = []
mouse_4.y = []
mouse_4.leftButton = []
mouse_4.midButton = []
mouse_4.rightButton = []
mouse_4.time = []
mouse_4.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
StartComponents = [ques_instr, mouse_4]
for thisComponent in StartComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Start" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ques_instr* updates
    if ques_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ques_instr.frameNStart = frameN  # exact frame index
        ques_instr.tStart = t  # local t and not account for scr refresh
        ques_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ques_instr, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ques_instr.started')
        ques_instr.setAutoDraw(True)
    # *mouse_4* updates
    if mouse_4.status == NOT_STARTED and t >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        mouse_4.frameNStart = frameN  # exact frame index
        mouse_4.tStart = t  # local t and not account for scr refresh
        mouse_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_4.started', t)
        mouse_4.status = STARTED
        mouse_4.mouseClock.reset()
        prevButtonState = mouse_4.getPressed()  # if button is down already this ISN'T a new click
    if mouse_4.status == STARTED:  # only update if started and not finished!
        buttons = mouse_4.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(ques_instr)
                    clickableList = ques_instr
                except:
                    clickableList = [ques_instr]
                for obj in clickableList:
                    if obj.contains(mouse_4):
                        gotValidClick = True
                        mouse_4.clicked_name.append(obj.name)
                x, y = mouse_4.getPos()
                mouse_4.x.append(x)
                mouse_4.y.append(y)
                buttons = mouse_4.getPressed()
                mouse_4.leftButton.append(buttons[0])
                mouse_4.midButton.append(buttons[1])
                mouse_4.rightButton.append(buttons[2])
                mouse_4.time.append(mouse_4.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in StartComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Start" ---
for thisComponent in StartComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_4.x', mouse_4.x)
thisExp.addData('mouse_4.y', mouse_4.y)
thisExp.addData('mouse_4.leftButton', mouse_4.leftButton)
thisExp.addData('mouse_4.midButton', mouse_4.midButton)
thisExp.addData('mouse_4.rightButton', mouse_4.rightButton)
thisExp.addData('mouse_4.time', mouse_4.time)
thisExp.addData('mouse_4.clicked_name', mouse_4.clicked_name)
thisExp.nextEntry()
# the Routine "Start" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "Questionnaire" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
slider_rad_therapy.reset()
slider_surgery.reset()
# setup some python lists for storing info about the mouse_6
mouse_6.x = []
mouse_6.y = []
mouse_6.leftButton = []
mouse_6.midButton = []
mouse_6.rightButton = []
mouse_6.time = []
mouse_6.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
QuestionnaireComponents = [slider_rad_therapy, text_rad_therapy, slider_surgery, text_surgery, image, mouse_6]
for thisComponent in QuestionnaireComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Questionnaire" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *slider_rad_therapy* updates
    if slider_rad_therapy.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        slider_rad_therapy.frameNStart = frameN  # exact frame index
        slider_rad_therapy.tStart = t  # local t and not account for scr refresh
        slider_rad_therapy.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_rad_therapy, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'slider_rad_therapy.started')
        slider_rad_therapy.setAutoDraw(True)
    
    # *text_rad_therapy* updates
    if text_rad_therapy.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_rad_therapy.frameNStart = frameN  # exact frame index
        text_rad_therapy.tStart = t  # local t and not account for scr refresh
        text_rad_therapy.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_rad_therapy, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_rad_therapy.started')
        text_rad_therapy.setAutoDraw(True)
    
    # *slider_surgery* updates
    if slider_surgery.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        slider_surgery.frameNStart = frameN  # exact frame index
        slider_surgery.tStart = t  # local t and not account for scr refresh
        slider_surgery.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(slider_surgery, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'slider_surgery.started')
        slider_surgery.setAutoDraw(True)
    
    # *text_surgery* updates
    if text_surgery.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_surgery.frameNStart = frameN  # exact frame index
        text_surgery.tStart = t  # local t and not account for scr refresh
        text_surgery.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_surgery, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_surgery.started')
        text_surgery.setAutoDraw(True)
    
    # *image* updates
    if image.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        image.frameNStart = frameN  # exact frame index
        image.tStart = t  # local t and not account for scr refresh
        image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'image.started')
        image.setAutoDraw(True)
    # *mouse_6* updates
    if mouse_6.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse_6.frameNStart = frameN  # exact frame index
        mouse_6.tStart = t  # local t and not account for scr refresh
        mouse_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_6, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_6.started', t)
        mouse_6.status = STARTED
        mouse_6.mouseClock.reset()
        prevButtonState = mouse_6.getPressed()  # if button is down already this ISN'T a new click
    if mouse_6.status == STARTED:  # only update if started and not finished!
        buttons = mouse_6.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(image)
                    clickableList = image
                except:
                    clickableList = [image]
                for obj in clickableList:
                    if obj.contains(mouse_6):
                        gotValidClick = True
                        mouse_6.clicked_name.append(obj.name)
                x, y = mouse_6.getPos()
                mouse_6.x.append(x)
                mouse_6.y.append(y)
                buttons = mouse_6.getPressed()
                mouse_6.leftButton.append(buttons[0])
                mouse_6.midButton.append(buttons[1])
                mouse_6.rightButton.append(buttons[2])
                mouse_6.time.append(mouse_6.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in QuestionnaireComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Questionnaire" ---
for thisComponent in QuestionnaireComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('slider_rad_therapy.response', slider_rad_therapy.getRating())
thisExp.addData('slider_rad_therapy.rt', slider_rad_therapy.getRT())
thisExp.addData('slider_surgery.response', slider_surgery.getRating())
thisExp.addData('slider_surgery.rt', slider_surgery.getRT())
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_6.x', mouse_6.x)
thisExp.addData('mouse_6.y', mouse_6.y)
thisExp.addData('mouse_6.leftButton', mouse_6.leftButton)
thisExp.addData('mouse_6.midButton', mouse_6.midButton)
thisExp.addData('mouse_6.rightButton', mouse_6.rightButton)
thisExp.addData('mouse_6.time', mouse_6.time)
thisExp.addData('mouse_6.clicked_name', mouse_6.clicked_name)
thisExp.nextEntry()
# the Routine "Questionnaire" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instruction" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
instrBlock.setText('Each patient below has been diagnosed with a low-risk, non-sclerosing, early-stage basal cell skin cancer. The patients are otherwise in good health. For each face, please indicate how likely you would be to recommend surgery versus radiation in the management of each lesion. \nPlease click anywhere to start')
# setup some python lists for storing info about the mouse
mouse.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
instructionComponents = [instrBlock, mouse]
for thisComponent in instructionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instruction" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instrBlock* updates
    if instrBlock.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instrBlock.frameNStart = frameN  # exact frame index
        instrBlock.tStart = t  # local t and not account for scr refresh
        instrBlock.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instrBlock, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'instrBlock.started')
        instrBlock.setAutoDraw(True)
    # *mouse* updates
    if mouse.status == NOT_STARTED and t >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        mouse.frameNStart = frameN  # exact frame index
        mouse.tStart = t  # local t and not account for scr refresh
        mouse.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse.started', t)
        mouse.status = STARTED
        mouse.mouseClock.reset()
        prevButtonState = [0, 0, 0]  # if now button is down we will treat as 'new' click
    if mouse.status == STARTED:  # only update if started and not finished!
        buttons = mouse.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(instrBlock)
                    clickableList = instrBlock
                except:
                    clickableList = [instrBlock]
                for obj in clickableList:
                    if obj.contains(mouse):
                        gotValidClick = True
                        mouse.clicked_name.append(obj.name)
                if gotValidClick:  
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instruction" ---
for thisComponent in instructionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
x, y = mouse.getPos()
buttons = mouse.getPressed()
if sum(buttons):
    # check if the mouse was inside our 'clickable' objects
    gotValidClick = False
    try:
        iter(instrBlock)
        clickableList = instrBlock
    except:
        clickableList = [instrBlock]
    for obj in clickableList:
        if obj.contains(mouse):
            gotValidClick = True
            mouse.clicked_name.append(obj.name)
thisExp.addData('mouse.x', x)
thisExp.addData('mouse.y', y)
thisExp.addData('mouse.leftButton', buttons[0])
thisExp.addData('mouse.midButton', buttons[1])
thisExp.addData('mouse.rightButton', buttons[2])
if len(mouse.clicked_name):
    thisExp.addData('mouse.clicked_name', mouse.clicked_name[0])
thisExp.nextEntry()
# the Routine "instruction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
originalFaceTrials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('faceImages.xlsx'),
    seed=None, name='originalFaceTrials')
thisExp.addLoop(originalFaceTrials)  # add the loop to the experiment
thisOriginalFaceTrial = originalFaceTrials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisOriginalFaceTrial.rgb)
if thisOriginalFaceTrial != None:
    for paramName in thisOriginalFaceTrial:
        exec('{} = thisOriginalFaceTrial[paramName]'.format(paramName))

for thisOriginalFaceTrial in originalFaceTrials:
    currentLoop = originalFaceTrials
    # abbreviate parameter names if possible (e.g. rgb = thisOriginalFaceTrial.rgb)
    if thisOriginalFaceTrial != None:
        for paramName in thisOriginalFaceTrial:
            exec('{} = thisOriginalFaceTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "RatingTrial" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    RatingTrialComponents = []
    for thisComponent in RatingTrialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "RatingTrial" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in RatingTrialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "RatingTrial" ---
    for thisComponent in RatingTrialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "RatingTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ITI" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    ITIComponents = []
    for thisComponent in ITIComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "ITI" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ITIComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ITI" ---
    for thisComponent in ITIComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'originalFaceTrials'


# set up handler to look after randomisation of conditions etc
faceQuestions = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('Rating_BlockOrder.xlsx'),
    seed=None, name='faceQuestions')
thisExp.addLoop(faceQuestions)  # add the loop to the experiment
thisFaceQuestion = faceQuestions.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisFaceQuestion.rgb)
if thisFaceQuestion != None:
    for paramName in thisFaceQuestion:
        exec('{} = thisFaceQuestion[paramName]'.format(paramName))

for thisFaceQuestion in faceQuestions:
    currentLoop = faceQuestions
    # abbreviate parameter names if possible (e.g. rgb = thisFaceQuestion.rgb)
    if thisFaceQuestion != None:
        for paramName in thisFaceQuestion:
            exec('{} = thisFaceQuestion[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "FaceQuestions" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_3
    positionNext2 = (0, -0.9)
    
    
    face_image_q.setImage(faceImages_q)
    slider_trustworthy.reset()
    slider_aggressive.reset()
    # setup some python lists for storing info about the mouse_7
    mouse_7.x = []
    mouse_7.y = []
    mouse_7.leftButton = []
    mouse_7.midButton = []
    mouse_7.rightButton = []
    mouse_7.time = []
    mouse_7.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    FaceQuestionsComponents = [face_image_q, slider_trustworthy, text_trustworthy, slider_aggressive, text_aggressive, mouse_7, Confirm]
    for thisComponent in FaceQuestionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "FaceQuestions" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # Run 'Each Frame' code from code_3
        if (slider_trustworthy.getRating()) and (slider_aggressive.getRating()):
            #ratingResult = PracSlider.getRating()
            positionNext2 = (0, -0.4)
            #startNext = True
        else:
            #ratingResult = "no rating"
            positionNext2 = (0, -0.9)
            #startNext = False
        
        
        # *face_image_q* updates
        if face_image_q.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            face_image_q.frameNStart = frameN  # exact frame index
            face_image_q.tStart = t  # local t and not account for scr refresh
            face_image_q.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(face_image_q, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'face_image_q.started')
            face_image_q.setAutoDraw(True)
        
        # *slider_trustworthy* updates
        if slider_trustworthy.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            slider_trustworthy.frameNStart = frameN  # exact frame index
            slider_trustworthy.tStart = t  # local t and not account for scr refresh
            slider_trustworthy.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_trustworthy, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider_trustworthy.started')
            slider_trustworthy.setAutoDraw(True)
        
        # *text_trustworthy* updates
        if text_trustworthy.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            text_trustworthy.frameNStart = frameN  # exact frame index
            text_trustworthy.tStart = t  # local t and not account for scr refresh
            text_trustworthy.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_trustworthy, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_trustworthy.started')
            text_trustworthy.setAutoDraw(True)
        
        # *slider_aggressive* updates
        if slider_aggressive.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            slider_aggressive.frameNStart = frameN  # exact frame index
            slider_aggressive.tStart = t  # local t and not account for scr refresh
            slider_aggressive.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_aggressive, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider_aggressive.started')
            slider_aggressive.setAutoDraw(True)
        
        # *text_aggressive* updates
        if text_aggressive.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            text_aggressive.frameNStart = frameN  # exact frame index
            text_aggressive.tStart = t  # local t and not account for scr refresh
            text_aggressive.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_aggressive, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_aggressive.started')
            text_aggressive.setAutoDraw(True)
        # *mouse_7* updates
        if mouse_7.status == NOT_STARTED and t >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            mouse_7.frameNStart = frameN  # exact frame index
            mouse_7.tStart = t  # local t and not account for scr refresh
            mouse_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_7.started', t)
            mouse_7.status = STARTED
            mouse_7.mouseClock.reset()
            prevButtonState = [0, 0, 0]  # if now button is down we will treat as 'new' click
        if mouse_7.status == STARTED:  # only update if started and not finished!
            buttons = mouse_7.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(Confirm)
                        clickableList = Confirm
                    except:
                        clickableList = [Confirm]
                    for obj in clickableList:
                        if obj.contains(mouse_7):
                            gotValidClick = True
                            mouse_7.clicked_name.append(obj.name)
                    x, y = mouse_7.getPos()
                    mouse_7.x.append(x)
                    mouse_7.y.append(y)
                    buttons = mouse_7.getPressed()
                    mouse_7.leftButton.append(buttons[0])
                    mouse_7.midButton.append(buttons[1])
                    mouse_7.rightButton.append(buttons[2])
                    mouse_7.time.append(mouse_7.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # abort routine on response
        
        # *Confirm* updates
        if Confirm.status == NOT_STARTED and tThisFlip >= 0.3-frameTolerance:
            # keep track of start time/frame for later
            Confirm.frameNStart = frameN  # exact frame index
            Confirm.tStart = t  # local t and not account for scr refresh
            Confirm.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Confirm, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Confirm.started')
            Confirm.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in FaceQuestionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "FaceQuestions" ---
    for thisComponent in FaceQuestionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    faceQuestions.addData('slider_trustworthy.response', slider_trustworthy.getRating())
    faceQuestions.addData('slider_trustworthy.rt', slider_trustworthy.getRT())
    faceQuestions.addData('slider_aggressive.response', slider_aggressive.getRating())
    faceQuestions.addData('slider_aggressive.rt', slider_aggressive.getRT())
    # store data for faceQuestions (TrialHandler)
    faceQuestions.addData('mouse_7.x', mouse_7.x)
    faceQuestions.addData('mouse_7.y', mouse_7.y)
    faceQuestions.addData('mouse_7.leftButton', mouse_7.leftButton)
    faceQuestions.addData('mouse_7.midButton', mouse_7.midButton)
    faceQuestions.addData('mouse_7.rightButton', mouse_7.rightButton)
    faceQuestions.addData('mouse_7.time', mouse_7.time)
    faceQuestions.addData('mouse_7.clicked_name', mouse_7.clicked_name)
    # the Routine "FaceQuestions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ITI2" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_2
    import random 
    jitter = random.uniform(0.5, 1.0)
    thisExp.addData('ITI', jitter) # record it in the data file
    
    # keep track of which components have finished
    ITI2Components = [text_2]
    for thisComponent in ITI2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "ITI2" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_2.started')
            text_2.setAutoDraw(True)
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + jitter-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2.stopped')
                text_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ITI2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ITI2" ---
    for thisComponent in ITI2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "ITI2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'faceQuestions'


# --- Prepare to start Routine "End" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_8
mouse_8.x = []
mouse_8.y = []
mouse_8.leftButton = []
mouse_8.midButton = []
mouse_8.rightButton = []
mouse_8.time = []
mouse_8.clicked_name = []
gotValidClick = False  # until a click is received
# keep track of which components have finished
EndComponents = [EndText, mouse_8]
for thisComponent in EndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "End" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *EndText* updates
    if EndText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        EndText.frameNStart = frameN  # exact frame index
        EndText.tStart = t  # local t and not account for scr refresh
        EndText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(EndText, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'EndText.started')
        EndText.setAutoDraw(True)
    # *mouse_8* updates
    if mouse_8.status == NOT_STARTED and t >= 0.3-frameTolerance:
        # keep track of start time/frame for later
        mouse_8.frameNStart = frameN  # exact frame index
        mouse_8.tStart = t  # local t and not account for scr refresh
        mouse_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_8, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse_8.started', t)
        mouse_8.status = STARTED
        mouse_8.mouseClock.reset()
        prevButtonState = mouse_8.getPressed()  # if button is down already this ISN'T a new click
    if mouse_8.status == STARTED:  # only update if started and not finished!
        buttons = mouse_8.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(EndText)
                    clickableList = EndText
                except:
                    clickableList = [EndText]
                for obj in clickableList:
                    if obj.contains(mouse_8):
                        gotValidClick = True
                        mouse_8.clicked_name.append(obj.name)
                x, y = mouse_8.getPos()
                mouse_8.x.append(x)
                mouse_8.y.append(y)
                buttons = mouse_8.getPressed()
                mouse_8.leftButton.append(buttons[0])
                mouse_8.midButton.append(buttons[1])
                mouse_8.rightButton.append(buttons[2])
                mouse_8.time.append(mouse_8.mouseClock.getTime())
                
                continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "End" ---
for thisComponent in EndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_8.x', mouse_8.x)
thisExp.addData('mouse_8.y', mouse_8.y)
thisExp.addData('mouse_8.leftButton', mouse_8.leftButton)
thisExp.addData('mouse_8.midButton', mouse_8.midButton)
thisExp.addData('mouse_8.rightButton', mouse_8.rightButton)
thisExp.addData('mouse_8.time', mouse_8.time)
thisExp.addData('mouse_8.clicked_name', mouse_8.clicked_name)
thisExp.nextEntry()
# the Routine "End" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
