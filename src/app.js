import  Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

var app = new Vue({
    el:'#app',
    data:{
        loading1:false ,
        loading2: false ,
        loading3: false
    }
})
import  chai from 'chai'

const  expect =chai.expect

//单元测试
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
    const gbutton = new Contructor({
        propsData:{
            icon:'settings',
        }
    })
    gbutton.$mount()
    gbutton.$on('click',function (){
        console.log(1)
    })
    let button=gbutton.$el
    button.click()
}