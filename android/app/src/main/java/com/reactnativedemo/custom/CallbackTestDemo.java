package com.reactnativedemo.custom;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;


public class CallbackTestDemo extends ReactContextBaseJavaModule {
    public CallbackTestDemo(ReactApplicationContext reactContext) {
        super(reactContext);
    }
  
    @Override
    public String getName() {
        return "CallbackTestDemo";
    }
    @ReactMethod
    public void getSuccOrError (
                     int tag,
                     int ancestorTag,
                     Callback successCallback,
                     Callback errorCallback) {
        if (tag > 0){
          successCallback.invoke(1,2,3,4);
        }else{
          errorCallback.invoke("error");
        }
    }
}