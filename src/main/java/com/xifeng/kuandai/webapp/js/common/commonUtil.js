//获取父节点下的‘attr’属性值为‘attrValue’的节点
function getNode(parent, attr, attrValue) {
    var nodes = [];
    parent.find('*').each(function() {
        if($(this).attr(attr) == attrValue) {
            nodes.push($(this));
        }
    });
    if(nodes.length > 1) {
        alert("节点不唯一！");
    }else if(nodes.length == 0){
        alert("未找到节点！");
    } else {
        var node = nodes[0];
        return node;
    }
}

//获取父节点下的‘name’属性值为‘attrValue’的节点
function getNodeByName(parent,attrValue){
    return getNode(parent, 'name', attrValue);
}