# Learning React Hook Form

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Web/mobile setup: <https://react-hook-form.com>

## Web setup

```bash
npx create-react-app demo-app && cd demo-app && yarn add react-hook-form && yarn start
```

```jsx
import { useForm } from "react-hook-form";
...
const { register, handleSubmit, watch, errors } = useForm();
const onSubmit = (data) => console.log(data);
const watchAValue = watch("minimalExampleField"); // watch value of input with this name="..."
return (
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="minimalExampleField" ref={register} />

      <input
        name="firstName"
        ref={register({ required: true, maxLength: 20 })}
      />
      {errors.firstName && "First name is required (max 20 characters)"}

      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />

      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />

      <input type="submit" />
    </form>
    {watchAValue && <p>Watch value: {watchAValue}</p>}
  </p>
);
```

Or see [`/demo-app/src/App.js`](https://github.com/hchiam/learning-react-hook-form/blob/master/demo-app/src/App.js) for a fuller, tested working example:

```bash
cd demo-app && yarn start
```
