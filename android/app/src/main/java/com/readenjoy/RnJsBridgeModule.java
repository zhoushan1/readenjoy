package com.readenjoy;

import android.app.Activity;
import android.content.Intent;
import android.text.TextUtils;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

/**
 * Created by xujianbo on 2017/1/18.
 * <p>
 * 统一处理native和react交互,交互方式有三种
 * 1.native主动向js传递事件，使用广播的形式
 * 2.Callback接口方式，写在方法最后一个参数里面
 * 3.Promise接口方式，写在方法最后一个参数里面
 * 如果不需要native传递数据，Callback和Promise一样
 * <p>
 * 在{@link BridgeReactPackage}中添加，交互的方法名必须加ReactMethod注解，返回类型为void
 */

public class RnJsBridgeModule extends ReactContextBaseJavaModule {

    private static final String MODULE_NAME = "RNInteractiveBridgeManager";

    private ReactApplicationContext mReactContext;

    public RnJsBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    /**
     * native主动向js发送事件
     *
     * @param reactContext
     * @param eventName    事件名，js添加事件监听需要
     * @param data         发送的数据
     */
    public static void sendToJS(ReactContext reactContext, String eventName, @Nullable Object data) {
        if (reactContext == null || TextUtils.isEmpty(eventName) || data == null)
            return;
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, data);
    }

    @ReactMethod
    public void openScanPage() {
        getCurrentActivity().startActivity(new Intent(getCurrentActivity(), ScanActivity.class));
    }

    @ReactMethod
    public void popViewController() {
        Activity activity = getCurrentActivity();
        activity.finish();
    }

}
