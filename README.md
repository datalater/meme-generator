# Getting started

1. `git clone git@github.com:datalater/meme-generator.git edd-mg-$(date +%Y%m%d)`
2. `yarn install`
3. `yarn start`

# Phase 1

## Instruction

Checkout branch to `phase-1`

1. Create 2 new components: rfce `Header` and rce `MemeGenerator`
2. Each component will display its own name.
3. MemeGenerator will be calling to an API and holding on to data.
4. Consequently, App will use two compoents.

Before move on to the next:

```shell
git reset HEAD --hard 
git clean -n
git clean -f
```

# Phase 2

## Instruction

Checkout branch to `phase-2`

In `MemeGenerator`:

1. Initialize state to save the follwoing data:
   1. topText
   2. bottomText
   3. randomImg (intialize with "http://i.imgflip.com/1bij.jpg")
2. Make an API call to "https://api.imgflip.com/get_memes" and save the 
data that comes back (`response.data.memes`) to a new state property
called `allMemeImgs`. (The data that comes back is an array)

Before move on to the next:

```shell
git reset HEAD --hard 
git clean -n
git clean -f
```

# Phase 3

## Instruction

Checkout branch to `phase-3`

In `MemeGenerator`:

1. Create 2 input fields, one for the topText and one for the bottomText Remember that these will be "controlled forms", so make sure to add all the attributes you'll need for that to work.
2. Create the onChange handler method. It should update the corresponding state on every change of the input box.

Before move on to the next:

```shell
git reset HEAD --hard 
git clean -n
git clean -f
```

# Phase 4

## Instruction

Checkout branch to `phase-4`

1. Create a method that, when the "Gen" button is clicked, chooses one of the
memes from our `allMemeImgs` array at random and makes it so that is the
meme image that shows up in the bottom portion of our meme generator site. (`.url`)

# Phase end

Checkout branch to `phase-end` to check out final answer.