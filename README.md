# react-formalize


[![NPM](https://img.shields.io/npm/v/@aposoftworks/react-formalize.svg)](https://www.npmjs.com/package/@aposoftworks/react-formalize) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/aposoftworks/react-formalize.svg?branch=master)](https://travis-ci.org/aposoftworks/react-formalize) ![npm](https://img.shields.io/npm/dt/@aposoftworks/react-formalize)

A simple and straight-foward wrapper around forms that works as you would expect. Fully customizable and able to handle files and images, using formdata.

## Install

```bash
npm install --save formalized
```

## Usage

```tsx
import * as React		from 'react';

import { Form, Input } 	from 'formalized';

export default function App () {
	const onSubmit = (data) => {
		//handle data
	};

    return (
	  <Form onSubmit={onSubmit}>
	  	<Input name="email" 	/>
	  	<Input name="password" 	/>
	  </Form>
    );
}
```

## License

BSD-3 © [aposoftworks](https://github.com/aposoftworks)
