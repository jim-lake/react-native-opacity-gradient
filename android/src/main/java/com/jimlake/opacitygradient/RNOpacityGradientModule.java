
package com.jimlake.opacitygradient;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNOpacityGradientModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNOpacityGradientModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNOpacityGradient";
  }
}
