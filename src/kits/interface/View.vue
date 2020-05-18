/* 
BView
=================================================================================
Sets up a view with the frame rectangle, which is specified in the coordinate 
system of its eventual parent, and assigns the BView an identifying name, 
which can be NULL.

When it's created, a BView doesn't belong to a window and has no parent. It's 
assigned a parent by having another BView adopt it with the AddChild() function. 
If the other view is in a window, the BView becomes part of that window's view 
hierarchy. A BView can be made a child of the window's top view by calling 
BWindow's version of the AddChild() function.

When the BView gains a parent, the values in frame are interpreted in the 
parent's coordinate system. The sides of the view must be aligned on screen 
pixels. Therefore, the frame rectangle should not contain coordinates with 
fractional values. Fractional coordinates will be rounded to the first lower 
whole number (for example 1.2 will be rounded down to 1.0).
*/

<template>
 <div class="b-view">
  <slot></slot>
 </div>
</template>

<script>
export default {
    name: 'BView',
    props: {
        
    },
    data: function() {
        return {
        }
    },
}
</script>

<style>
.b-view {
    background: #FFF;
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
}
</style>
