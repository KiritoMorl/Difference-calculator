# Difference Calculator
### Hexlet tests and linter status:
[![Actions Status](https://github.com/KiritoMorl/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/KiritoMorl/frontend-project-46/actions)
<a href="https://codeclimate.com/github/KiritoMorl/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/a5106705cb9abf1c83d5/maintainability" /></a>
<a href="https://codeclimate.com/github/KiritoMorl/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a5106705cb9abf1c83d5/test_coverage" /></a>

### Description
____
Difference Calculator is a program that determines the difference between two data structures.
Utility Features:

* Support for different input formats: yaml, json.
* Generating a report in the form of plain text, stylish and json.

### System requirements
____
Node.js v18.12.1

### Setup
____
    git clone git@github.com:KiritoMorl/frontend-project-46.git
***
    npm ci
***
    npm link

### Usage
____
The stylish format is used by default
    gendiff <filepath1>, <filepath2>
To select a format, use the -f flag and the format name.
    gendiff -f plain <filepath1>, <filepath2>

    gendiff -f json <filepath1>, <filepath2>

### Usage
____
#### Differences between json files in the default stylish format.
____
<a href="https://asciinema.org/a/x64HqyR1cFysQEr9PALxGbcqn" target="_blank"><img src="https://asciinema.org/a/x64HqyR1cFysQEr9PALxGbcqn.svg" /></a>

#### Differences between yml files in the default stylish format.
____
<a href="https://asciinema.org/a/8Ncb3HGhOrXD6radasQikUlwm" target="_blank"><img src="https://asciinema.org/a/8Ncb3HGhOrXD6radasQikUlwm.svg" /></a>

#### Differences between json and yaml files in stylish format by default.
____
<a href="https://asciinema.org/a/SiQpUcOfKZi1gnctUhSg8gF9n" target="_blank"><img src="https://asciinema.org/a/SiQpUcOfKZi1gnctUhSg8gF9n.svg" /></a>

#### Differences between plain text json files.
____
<a href="https://asciinema.org/a/1lfesbOqKGFhWMYcVWLtttLzZ" target="_blank"><img src="https://asciinema.org/a/1lfesbOqKGFhWMYcVWLtttLzZ.svg" /></a>

#### Differences between yml files in plain text format.
____
<a href="https://asciinema.org/a/LaiwtSMRwLTxMsybcumegbw0B" target="_blank"><img src="https://asciinema.org/a/LaiwtSMRwLTxMsybcumegbw0B.svg" /></a>

#### Differences between json files in json format.
____
<a href="https://asciinema.org/a/uTbmskt8xvx8ZJclOcP72ekFH" target="_blank"><img src="https://asciinema.org/a/uTbmskt8xvx8ZJclOcP72ekFH.svg" /></a>