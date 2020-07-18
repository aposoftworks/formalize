# formalization


[![NPM](https://img.shields.io/npm/v/formalization.svg)](https://www.npmjs.com/package/formalization) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/aposoftworks/formalization.svg?branch=master)](https://travis-ci.org/aposoftworks/formalization) ![npm](https://img.shields.io/npm/dt/formalization) [![Support](https://img.shields.io/badge/Patreon-Support-orange.svg?logo=Patreon)](https://www.patreon.com/rafaelcorrea)

A simple and straight-foward wrapper around forms that works as you would expect. Fully customizable and able to handle files and images, using formdata.

## Install

```bash
npm install --save formalization
```

## Usage

```tsx
import * as React from 'react';

import { Form, Input, Group, Text, When, Value } from 'formalization';

export default function App () {
	const onSubmit = (data) => {
		//handle data
	};

	const validateEmail = (value) => {
		if (/*validation fails*/) {
			return "Email not valid";
		}
	}

    return (
		<Form onSubmit={onSubmit}>
			<Group name="user">
				<Input name="email" validates={validateEmail} />
				<div className="error-message">
					<Error name="email" />
				</div>

				<Input name="name" />
			</Group>

			<Toggle name="newsletter" />

			<When name="newsletter" when={value => !!value}>
				Thank you for signing our newsletter <Value pathname="user.name" />
			</When>

			<Text name="message" />
		</Form>
    );
}
```

## Components

### Form

The core component of the form, this handles, gathers and set the data. If you return false from the onChange/onSubmit, it will clear the form, if you return any data, it will adjust the form accordling, if you return null, nothing happens.

#### props

|name|requirement|type|description|
|---|---|---|---|
|data|optional|[Object, function (newValue)]|A useState array that will be used to interact with an outer object, don't switch between using a controlled state data and uncontrolled|
|initialData|optional|Object|Initial state of the form data|
|file|optional|boolean|Changes the result of the onChange/onSubmit to a FormData|
|onChange|optional|function (data)|Function that returns the data when the form is updated|
|onSubmit|required|function (data)|Function that returns the data when the form is submitted|

### Group

Group component allow you to nest data inside of objects

#### props

|name|requirement|type|description|
|---|---|---|---|
|name|required|string|The key that this object will be recognized inside of the form result|

### Input | Text | File | Select | Toggle

The form input that handles each type in a specific way, since toggle has some "peculiarities", we handle him separatedly from the input.

#### props

|name|requirement|type|description|
|---|---|---|---|
|name|required|string|The key that this object will be recognized inside of the form result|
|onChange|optional|function (data, htmlnode)|Callback that let's you know when this component has changed value|
|filters|optional|Array<function (data) => any>|An array that can modify the value before it's handled to the form itself|

### Wrapper

In case you are using another package or you want to build a component that interacts with the form, you can use the wrapper for this. You can use the filters prop to alter the value cleanly.

#### props

|name|requirement|type|description|
|---|---|---|---|
|name|required|string|The key that this object will be recognized inside of the form result|
|value|required|any|The value that will be inserted into the form|
|setValue|required|function (newValue)|This is required so formalization can set the data innerly|
|filters|optional|Array<function (data) => any>|An array that can modify the value before it's handled to the form itself|

### Value

You can use this component to display a value from inside of the form without having too much issue about it. You need to use name or pathname.

#### props

|name|requirement|type|description|
|---|---|---|---|
|name|optional|string|The name of the key relative to the position in the form|
|pathname|optional|string|The absolute path to the key and it's name|
|default|optional|any|Default value to be displayed in case there is a null value|
|filters|optional|Array<function (data) => any>|An array that can modify the value before it's handled to the form itself|

### When

This component allows you to conditionally display it's children based on the condition given. You need to use name or pathname.

#### props

|name|requirement|type|description|
|---|---|---|---|
|name|optional|string|The name of the key relative to the position in the form|
|pathname|optional|string|The absolute path to the key and it's name|
|when|required|boolean or function (value) => boolean|The condition that prevents the children from appearing|

## License

BSD-3 © [aposoftworks](https://github.com/aposoftworks)
