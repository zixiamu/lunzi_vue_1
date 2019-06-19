import  Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component("g-input",Input)


var app = new Vue({
    el:'#app',
    data:{
        loading1:false ,
        loading2: false ,
        loading3: false
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        }
    }
})

import  chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const  expect =chai.expect

//单元测试
//测试按钮含有icon
try{
    {
        const Contructor = Vue.extend(Button)
        const vm = new Contructor({
            propsData:{
                icon:'settings'
            }
        })
        vm.$mount()
        let useElement=vm.$el.querySelector('use')
        let href=useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Contructor = Vue.extend(Button)
        const vm = new Contructor({
            propsData:{
                icon:'settings',
                loading:true
            }
        })
        vm.$mount()
        let useElement=vm.$el.querySelector('use')
        let href=useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Contructor = Vue.extend(Button)
        const vm = new Contructor({
            propsData:{
                icon:'settings',
                iconPosition:'left'
            }
        })
        vm.$mount(div)
        let svg=vm.$el.querySelector('svg')
        let {order}=window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Contructor = Vue.extend(Button)
        const vm = new Contructor({
            propsData:{
                icon:'settings',
                iconPosition:'right'
            }
        })
        vm.$mount(div)
        let svg=vm.$el.querySelector('svg')
        let {order}=window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }

//mock
    {
        const Contructor = Vue.extend(Button)
        const vm = new Contructor({
            propsData: {
                icon: 'settings',
            }
        })
        vm.$mount()
        let spy = chai.spy(function () {
        })
        vm.$on('click', spy)
        //希望函数被执行
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
} catch(error){
    window.errors=[error]
} finally {
    window.errors && window.errors.forEach((error)=>{
        console.error(error.message)
    })
}