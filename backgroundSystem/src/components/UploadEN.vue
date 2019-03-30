<template>
    <div class="root-container">
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