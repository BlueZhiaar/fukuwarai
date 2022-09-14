'use strict';

/**
 * HTMLの要素を作成する関数
 * create_element
 * @param {str} tag
 * @param {str} id_name
 * @param {str} class_name
 * @param {str} inner_text
 * @return {obj} HTM要素を返す
 */
 function create_element(tag,id_name='',class_name='',inner_text='',data='',src='',style=''){
    const el = document.createElement(tag);
    if(id_name){
        el.id = id_name;
    }
    if(class_name) {
        el.className = class_name;
    }
    if(inner_text) {
        el.innerText = inner_text;
    }
    if(data){
        el.data = data;
    }
    if(src){
        el.src = src;
    }
    if(style){
        el.style = style;
    }

    return el;
}

function create_img(tag,id_name='',width='',height='',class_name='',src=''){
    const el = document.createElement(tag);
    if(id_name){
        el.id = id_name;
    }
    if(width){
        el.width = width;
    }
    if(height){
        el.height = height;
    }
    if(class_name){
        el.className = class_name;
    }
    if(src){
        el.src = src;
    }

    return el;
}

