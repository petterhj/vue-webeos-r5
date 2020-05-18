/* 
BWindow
=================================================================================
Every window in an application is represented by a separate BWindow object. 
Constructing the BWindow establishes a connection to the Application Server. 
When you call BWindow's window-manipulating functions (Show(), MoveTo(), 
SetTitle() and so on), the object sends a message to the server, which performs 
the actual manipulation.

The BWindow class inherits from BLooper. Every BWindow object spawns a thread 
(in the application's address space) where it receives and responds to interface 
messages from the server.

All other Interface Kit objects play roles that depend on a The BWindow. They 
draw in a window, respond to interface messages received by a window, or act in 
support of other objects that draw and respond to messages.

https://github.com/haiku/haiku/blob/master/src/kits/interface/Window.cpp

BWindow(BRect frame,
  const char *title,
  window_type type,
  uint32 flags,
  uint32 workspace = B_CURRENT_WORKSPACE);
*/

<template>
 <div class="b-window" :style="windowStyle">
  <div class="b-tab">
   <div class="b-tab-inner1">
    <div class="b-tab-inner2">
    {{title}}
    </div>
   </div>
  </div>

  <div class="b-window-contet">
   <div class="b-window-contet-inner1">
    <div class="b-window-contet-inner2">
     <div class="b-window-contet-inner3">
      <div class="b-window-contet-inner4">
       <slot></slot>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
export default {
    name: 'BWindow',
    props: {
        frame: Array,
        title: String
    },
    data: function() {
        return {
            fFrame: {
                left: this.frame[0],
                top: this.frame[1],
                right: this.frame[2],
                bottom: this.frame[3],
            },
            fActive: false,
            fShowLevel: 1,
        }
    },
    computed: {
        windowStyle: function() {
            return {
                left: this.fFrame.left + 'px',
                top: this.fFrame.top + 'px',
                width: this.fFrame.right + 'px',
                height: this.fFrame.bottom + 'px',
                visibility: (this.IsHidden() ? "hidden" : "visible"),
            }
        }
    },
    methods: {
        SetTitle(title) { this.title = title; },
        Close() { console.log("CLOSE WINDOW!!!")},
        // Minimize(minimize) {},
        MoveTo(x, y) { this.fFrame.top = x; this.fFrame.left = y; },
        ResizeTo(width, height) { this.fFrame.right = width; this.fFrame.bottom = height; },
        Show() { this.fShowLevel -= 1; },
        Hide() { this.fShowLevel += 1; },
        IsHidden() { 
            // Returns whether or not the window is hidden. 
            // Windows are hidden by default.
            return this.fShowLevel > 0; 
        }, 
        IsFront() { return false; },
        IsActive() { return false; },
    },
    created() {
        console.log('Creating BWindow, title="'+this.title+'", frame='+this.frame);
        // this.MoveTo(100, 100);
        // this.ResizeTo(300, 300);
        this.Show();
    },
    mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.b-window {
    position: absolute;
    top: 0; left: 0;
    display: grid;
    grid-template-rows: auto 1fr;
}

.b-window .b-tab {
    display: inline-block;
    position: relative;
    /* top: 2px; */
}

.b-window .b-tab-inner1 {
    border-top: 1px solid #989898;
    border-left: 1px solid #989898;
    border-right: 1px solid #606060;
    border-bottom: 1px solid #D8D8D8;
    display: inline-block;
    background-color: #FFCB00;
}
.b-window .b-tab-inner2 {
    border-top: 1px solid #FFFF50;
    border-left: 1px solid #FFFF50;
    border-right: 1px solid #AF7B00;
    border-bottom: 1px solid #D8D8D8;
    padding: 0 15px;
}


.b-window .b-window-contet {
    background-color: white;
    border-top: 1px solid #989898;
    border-left: 1px solid #989898;
    border-right: 1px solid #606060;
    border-bottom: 1px solid #606060;
}
.b-window .b-window-contet-inner1 {
    width: 100%; height: 100%;
    border-top: 1px solid #FFFFFF;
    border-left: 1px solid #FFFFFF;
    border-right: 1px solid #888888;
    border-bottom: 1px solid #888888;
}
.b-window .b-window-contet-inner2 {
    width: 100%; height: 100%;
    border: 1px solid #D8D8D8;
}
.b-window .b-window-contet-inner3 {
    width: 100%; height: 100%;
    border-top: 1px solid #888888;
    border-left: 1px solid #888888;
    border-right: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
}
.b-window .b-window-contet-inner4 {
    width: 100%; height: 100%;
    border: 1px solid #989898;
}
</style>
