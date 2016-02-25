#react-hold-button
A button you have to press for some time before it fires

![example](https://i.imgflip.com/zt95t.gif)

##Usage

###1. install the lib
   npm install react-hold-button


###2. import the component
    import HoldButton from 'react-hold-button';  

###3. use the component
A complete example is available in `./example` folder.
    <HoldButton onLongPress={exampleCallback} Content="text" />


## try it out
    git clone
    npm install
    npm run dev


##Properties:
- `onLongPress` - `[function]` button callback
- `Content` - `[string|object]` button content


##Style
react-hold-button is based on the `transitionend` event, some CSS is required. heres an example. you can build your own using the `.done` and `.holding` css classes
```css
    .hold-btn-container{
        background: #CCC;
        width: 100px;
        height: 100px;
        padding:2px;
        border-radius: 50%;
    }

    
    .hold-btn{
        width: 33%;
        height: 33%;
        position: relative;
        top:33%;
        left:33%;
        background: red;
        border-radius: 50%;
        transform:scale(1); 
        transition:transform 0.25s ease-out;
        cursor:pointer;
        text-align: center; 
        user-select: none; 
        -webkit-user-select: none; 
        -ms-user-select: none; 
    }

    .hold-btn span{
        display: inline-block;
        width: 100%;
        margin-top: 22%;
        user-select: none; 
        -webkit-user-select: none; 
        -ms-user-select: none; 
    }

    .hold-btn.holding{ 
        transform:scale(3); 
        transition:transform 1.75s  ease-in;
    }

    .hold-btn.done{
        opacity: 0;
        transform:scale(6); 
        transition:all 0.35s ease-in;
        cursor: default;
    }
```

