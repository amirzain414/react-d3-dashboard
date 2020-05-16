import React, { Component } from 'react';
import './styles.css';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DatePicker, Input, Select } from 'antd';
import '../../../styles/components/antd.scss';

const Search = Input.Search;
const Option = Select.Option;

/**
 * @name AddModalContent Component
 *
 * @param {Object}   literals
 * @param {Func}   filterModalClose
 *
 * @returns {JSX}
 */

class FilterModalContent extends Component {
  state = {
    // fromDate: '',
    // toDate: '',
    // factory: '',
    // region: '',
    // age: '',
    // gender: '',
    // position: '',
  };

  componentDidMount() {
    const p = this.props;
    p.onRef(this);
  }

  /**
   * @name isValid
   * Check if all form data is not empty.
   *
   */
  isValid = () => {
    return true;
  };

  onChangeDate = (name, value) => {
    this.setState({ [name]: value });
  }

  onChangeRegion = (value) => {
    console.log(`selected ${value}`);
  }

  render() {
    const p = this.props;
    const disabled = this.isValid();
    return (
      <div className='DashboardView__FilterModal'>
        <p>
          { p.literals.modal.filterBy }
        </p>
        <div style={{ marginBottom: 20 }}>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <DatePicker placeholder={p.literals.modal.date} onChange={(name, value) => this.onChangeDate('fromDate', value)} />
              <DatePicker placeholder={p.literals.modal.date} onChange={(name, value) => this.onChangeDate('toDate', value)} />
            </Grid>
            <Grid item xs={4}>
              <Search placeholder='Factory' onSearch={this.onSearch} />
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder={p.literals.modal.region}
                onChange={this.onChangeRegion}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value='jack'>Jack</Option>
                <Option value='lucy'>Lucy</Option>
                <Option value='tom'>Tom</Option>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <DatePicker onChange={this.onChangeDate} />
              <Search placeholder='Factory' onSearch={this.onSearch} />
            </Grid>
          </Grid>
        </div>
        <form>
          <Button onClick={this.graphSave} disabled={disabled}>
            { p.literals.modal.apply }
          </Button>
          <Button onClick={p.filterModalClose}>
            { p.literals.modal.cancel }
          </Button>
        </form>
      </div>
    );
  }
}

export default FilterModalContent;
