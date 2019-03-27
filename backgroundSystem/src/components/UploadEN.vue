<template>
    <div class="root">
        <header class="title">产品参数</header>
        <main>
            <Form :model="formItem" :label-width="80">
                <FormItem label="名称">
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="规格">
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="口味">
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                </FormItem>
                 <FormItem label="产地">
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                </FormItem>
                <!-- <FormItem label="Select">
                    <Select v-model="formItem.select">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="DatePicker">
                    <Row>
                        <Col span="11">
                            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                        </Col>
                        <Col span="2" style="text-align: center">-</Col>
                        <Col span="11">
                            <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="Radio">
                    <RadioGroup v-model="formItem.radio">
                        <Radio label="male">Male</Radio>
                        <Radio label="female">Female</Radio>
                    </RadioGroup>
                </FormItem>
               
                <FormItem label="Switch">
                    <i-switch v-model="formItem.switch" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                    </i-switch>
                </FormItem>
                <FormItem label="Slider">
                    <Slider v-model="formItem.slider" range></Slider>
                </FormItem>
                <FormItem label="Text">
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem> -->
                 <FormItem label="Checkbox">
                    <CheckboxGroup v-model="formItem.checkbox">
                        <Checkbox label="Eat"></Checkbox>
                        <Checkbox label="Sleep"></Checkbox>
                        <Checkbox label="Run"></Checkbox>
                        <Checkbox label="Movie"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem>
                    <Button type="primary">Submit</Button>
                    <Button style="margin-left: 8px">Cancel</Button>
                </FormItem>
            </Form>
             <header class="title">产品图片</header>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'UploadEN',
        data() {
            return {
                formItem: '',
            }
        }
    }
</script>

<style lang="" scoped>
    .root {
        margin: 48px;
    }
</style>