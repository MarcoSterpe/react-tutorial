import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 char.' }),
  age: z
    .number({ invalid_type_error: 'Age field is required.' })
    .min(18, { message: 'Age must be at least 18' })
});

type FormData = z.infer<typeof schema>;

const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="stateName" className="form-label">
          Name
        </label>
        <input
          {...register('name')}
          id="stateName"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="stateAge" className="form-label">
          Age
        </label>
        <input
          {...register('age', { valueAsNumber: true })}
          id="stateAge"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormHook;