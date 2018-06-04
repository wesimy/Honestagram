import React from 'react';  
export function renderInput(field) {
    return (
      <div>
        <label>{field.label}</label>
        <div>
          <input {...field.input} className={(field.meta.touched && field.meta.error)? `${field.className} uk-form-danger`: field.className } placeholder={field.label} type={field.type} />
          {field.meta.touched &&
            ((field.meta.error && <span>{field.meta.error}</span>) ||
              (field.meta.warning && <span>{field.meta.warning}</span>))}
        </div>
      </div>
    );
  }