<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <div v-if="enableHtml" v-html="$slots.default[0]"></div>
            <slot v-else></slot>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>

    export default {
        name:'GuluToast',
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type: Number,
                default: 5
            },
            closeButton:{
                type:Object,
                default(){
                    return{
                        text:'关闭',callback:undefined
                        }
                    }
            },
            enableHtml:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top','middle','bottom'].indexOf(value)>=0
                }
            }

        },
        mounted() {
            this.updateStyle()
            this.execAutoClose()

        },
        computed:{
            toastClasses(){
                return {
                    [`position-${this.position}`]:true
                }

            }
        },
        methods:{
            updateStyle(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoCloseDelay*1000)
                }
            },
            close(){
                this.$el.remove()
                this.$destroy
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback()
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    $font-size:14px;
    $line-min-height: 40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast{
        font-size: 14px;
        min-height: $line-min-height;
        line-height: 1.8;
        color: white;
        position: fixed;
        left: 50%;
        display: flex;
        align-items:center;
        background:$toast-bg;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
        padding: 0px 16px;
        .close{
            padding-left: 16px;
            flex-shrink: 0;
        }
        .line{
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        .message{
            padding: 8px 0;
        }
        &.position-top{
            top:0;
            transform: translateX(-50%);
        }
        &.position-bottom{
            bottom:0;
            transform: translateX(-50%);
        }
        &.position-middle{
            top:50%;
            transform: translate(-50%,-50%);
        }
    }

</style>