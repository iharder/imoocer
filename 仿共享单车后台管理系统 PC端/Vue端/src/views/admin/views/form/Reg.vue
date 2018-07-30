<template>
  <a-card>
    <a-form>
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Fail'
        validateStatus='error'
        help='Should be combination of numbers & alphabets'
      >
        <a-input placeholder='unavailable choice' id='error' />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Warning'
        validateStatus='warning'
      >
        <a-input placeholder='Warning' id='warning' />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Validating'
        hasFeedback
        validateStatus='validating'
        help='The information is being validated...'
      >
        <a-input placeholder="I'm the content is being validated" id='validating' />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Success'
        hasFeedback
        validateStatus='success'
      >
        <a-input placeholder="I'm the content" id='success' />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Warning'
        hasFeedback
        validateStatus='warning'
      >
        <a-input placeholder='Warning' id='warning' />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Fail'
        hasFeedback
        validateStatus='error'
        help='Should be combination of numbers & alphabets'
      >
        <a-input placeholder='unavailable choice' id='error' />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Success'
        hasFeedback
        validateStatus='success'
      >
        <a-date-picker style="width: 100%" />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Warning'
        hasFeedback
        validateStatus='warning'
      >
        <a-time-picker style="width: 100%" />
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Error'
        hasFeedback
        validateStatus='error'
      >
        <a-select defaultValue='1'>
          <a-select-option value='1'>Option 1</a-select-option>
          <a-select-option value='2'>Option 2</a-select-option>
          <a-select-option value='3'>Option 3</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Validating'
        hasFeedback
        validateStatus='validating'
        help='The information is being validated...'
      >
        <a-cascader :defaultValue="['1']" :options="[]" />
      </a-form-item>

      <a-form-item
        label='inline'
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
        <a-col :span="11">
          <a-form-item validateStatus='error' help='Please select the correct date'>
            <a-date-picker style="width: 100%"/>
          </a-form-item>
        </a-col>
        <a-col :span="2">
          <span :style="{ display: 'inline-block', width: '100%', textAlign: 'center' }">
            -
          </span>
        </a-col>
        <a-col :span="11">
          <a-form-item>
            <a-date-picker style="width: 100%"/>
          </a-form-item>
        </a-col>
      </a-form-item>

      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Success'
        hasFeedback
        validateStatus='success'
      >
        <a-input-number style="width: 100%" />
      </a-form-item>
    </a-form>
  </a-card>
</template>
<script>
export default {
  name: "Reg",
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
</style>
