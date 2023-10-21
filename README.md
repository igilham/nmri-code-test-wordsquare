# Word Squares

A project to find word squares from an input string and a dictionary.

## Problem breakdown

The first test case is a 4x4 square and a list of characters. The command and output should look like the below.

```shell
$ node dist/index.js 4 eeeeddoonnnsssrv
rose
oven
send
ends
```

I have been given a [word list][words] to work from but it may be easiest to start out with just the expected words from the output. Support for more dictionaries (languages, etc.) can be considered later.

To arrive at the solution, we need to search for valid words that fit the pattern which can be placed in the square using the feedback of the placed characters. I've been advised to avoid a 2d array as the storage mechanism.

The problem has not already been broken down into steps so I'm making some notes on an approach that may work.

The first word may start with any letter from the input, but all the other letters need to appear at least twice in the input.

The second word must start with the second letter of the first word, add a single letter which may be unique, then all subsequent letters must appear at least twice in the input. And so on.

This generalises to the nth word, which must start with the nth letter of the first word, add a single letter which may be unique, then all subsequent letters must appear at least twice in the input.

[words]: https://norvig.com/ngrams/enable1.txt
