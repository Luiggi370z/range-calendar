import './index.css';
import Field from '../../../components/field';

const Fields = ({ fields, onFieldChange, onFormSubmit, isValid }) => {
  return (
    <form className="fields" onSubmit={onFormSubmit}>
      <Field
        name="startDate"
        label="Start Date"
        type="date"
        value={fields.startDate}
        onChange={onFieldChange}
      />
      <Field
        name="totalDays"
        label="Number of Days"
        type="number"
        value={fields.totalDays}
        onChange={onFieldChange}
      />
      <Field
        name="country"
        label="Country"
        type="text"
        value={fields.country}
        onChange={onFieldChange}
      />
      <input type="submit" disabled={!isValid} value="Apply" />
    </form>
  );
};

export default Fields;
