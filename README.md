# Word Squares

A project to find word squares from an input string and a dictionary.

## Usage

```shell
npm ci
npm run build

node dist/index.js -h
node dist/index.js <size> <input>
```

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

## Log

- Set up an empty typescript project to get started with.
- Added a hellow world function and test case to ensure the tooling was set up correctly.
- Parsed the input and validated the arguments.
- Explored the structure of the problem with a top-level `solve`` function in order to get a feel for it.
- Decided to split out a function to find words from an input string, slicing the string to remove the found characters and produce a remainder.
- Split out function to find individual characters n times and return the remainder of an input string.
- Add some tests to explore how to find the correct words, given the rules of the game
- Modify wordsquare to solve for the rules using a minimal dictionary.
- Add some tests to ensure solution works for the example test cases

## Thoughts and next steps

I ran out of time as it took me a little longer than I'd hoped to piece together the main solver function. It should be possible to add a real dictionary and test more thoroughly against that with a little more time.

The dictionary concept has been reduced to a small list of strings in my solution but ideally this should be a more abstract type that can more easily be searched for candidate words. This would help to encapsulate logic around limiting the word list by length and by the initial characters of the word.

The `findWord` function is a little clumsy to use and could use a cleaner interface to hide the underlying complexity. There are test cases demonstrating how to look up the nth word in a word square so perhaps a wrapper around these functions would be beneficial. I've seen a few error cases where the stack overflows as well, so it may make sense to tighten up the failure modes and perhaps refactor to an iterative style to remove the limnitation of v8's lack of tail call optimisation.

There is no error response if the solver fails. It would help to add some kind of error reporting or a richer response type. In a similar fashion, there should be some negative test cases to ensure the solver fails in a predicable fashion. This requires a little more time.

[words]: https://norvig.com/ngrams/enable1.txt
