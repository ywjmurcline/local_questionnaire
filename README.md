Hi there, this is an implementation of local questionaire system.


## Introduction

This is an implementation of local questionaire system that allows you to construct a questionnaire with some pre-defined questions templates.

## Dependencies
Node

## Usage
### 1. Configure your questionaire
Types of available questions includes:
###### Instruction
```json
    "instruction": ["INS", "content"]
```
Instruction sticks on the top of every page.
###### Fill in Blank
```json
"fill_in_blank": ["FIB", "cue", "placeholder", "type", "alert(does not support yet)", if_must_filled]
```
If you don't want a placeholder, leave it as "".
If you want to use default type, leave it as "". For all supported input types see https://www.w3schools.com/html/html_form_input_types.asp.
if_must_filled is a boolean value.

###### Fill in Date
```json
"fill_in_date": ["FID", "cue", "alert(does not support yet)", if_must_filled],
```

###### From To
```json
"from_to": ["FT", "cue", "cue_start", "cue_end", if_must_filled],
```

###### Multiple Choice 5
```json
"multiple_5": ["MCS5", "question", [number cues], [text cues]],
"multiple_5": ["MCS5", "question", [1, 2, 3, 4, 5], ["A", "B", "C", "D", ""]],
```
If you don't want number cues or text cues, leave them as "" or just blank, but make sure you put down enough commas so the arrays have the desired length.

###### Multiple Choice 7
```json
"multiple_7": ["MCS7", "question", [number cues], [text cues]],
"multiple_7": ["MCS7", "question", [1, 2, 3, 4, 5, 6, 7], ["A", "B", "C", "D", "", "", ""]],
```
If you don't want number cues or text cues, leave them as "" or just blank, but make sure you put down enough commas so the arrays have the desired length.

###### Big Textblock
```json
"other": ["BTB", "title", "additional information", "placeholder", if_must_filled]
```

All questions should be configured in configure.json.

DO NOT, DO NOT, DO NOT! change the name of the file (well, unless you know where the file is visited and change the corresponding file name there).


### 2. Run your questionnaire

Open terminal in this folder (the one with server.js ), and run
```
node server.js
```

and this 
```
Server running at http://localhost:some_port_number/

```
should pop up.
Click on the link, it will take you to your questionnaire.

A deault questionnaire is there to serve as example.

### 3. Fill out the questionnaire

Fill out your questionnaire. 
Once the "NEXT" button is clicked, the questionnaire automatically checks for unfilled questions that should be answered, and automatically highlights and takes you to the first to-be-answered question.

### 4. Get your data

After you finished all the questions, an alert with the message "Done!" will pop up. The answers you gave will be compiled in to a txt file that automatically downloads to your default download folder.

### 5. Rerun your questionnaire

Just hit the refresh button, it should do the work.
The previous answers will be deleted.



