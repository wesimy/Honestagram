import React from 'react';  
export function renderInput(field) {
    return (
      <div className="uk-margin">
        {(field.label)? <label className="uk-form-label">{field.label}</label>: ''}
        <div className="uk-form-controls">
        <div className="uk-inline">
            {(field.icon)? <span className="uk-form-icon" uk-icon={`icon: ${field.icon}`}></span> : ''}
          <input {...field.input} className={(field.meta.touched && field.meta.error)? `${field.className} uk-form-danger`: field.className } placeholder={field.placeholder} type={field.type} />
        </div>
          {/* {field.meta.touched &&
            ((field.meta.error && <span>{field.meta.error}</span>) ||
              (field.meta.warning && <span>{field.meta.warning}</span>))} */}
        </div>
      </div>
    );
  }