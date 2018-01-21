package com.bernard;

import org.apache.cordova.*;

import android.app.Activity;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.le.AdvertiseCallback;
import android.bluetooth.le.AdvertiseSettings;
import android.os.Bundle;
import android.util.Log;

import org.altbeacon.beacon.*;
import java.util.Arrays;


import static org.altbeacon.beacon.AltBeaconParser.TAG;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class BLETransmitter extends CordovaPlugin  {
  private BeaconManager beaconManager;
  private Beacon beacon;
  private BeaconParser beaconParser;
  private BeaconTransmitter beaconTransmitter;
  private BluetoothAdapter mBluetoothAdapter;
  private int mBLESupported;

  protected void start(final CallbackContext callbackContext, final long secret) {
    beacon = new Beacon.Builder()
    .setId1("2f234454-cf6d-4fff-adf2-f4911ba9ffa6")
    .setId2("1")
    .setId3("2")
    .setManufacturer(0x0118)
    .setTxPower(-59)
    .setDataFields(Arrays.asList(new Long[]{secret}))
    .build();
    beaconParser = new BeaconParser()
    .setBeaconLayout("m:2-3=beac,i:4-19,i:20-21,i:22-23,p:24-24,d:25-25");

    beaconTransmitter = new BeaconTransmitter(this.cordova.getActivity().getApplicationContext(), beaconParser);

    beaconTransmitter.startAdvertising(beacon, new AdvertiseCallback() {
      @Override
      public void onStartFailure(int errorCode) {
        callbackContext.error("Advertisement start failed with code: " + errorCode);
      }

      @Override
      public void onStartSuccess(AdvertiseSettings settingsInEffect) {
        callbackContext.success("Advertisement started: Broadcasting " + secret);
      }
    });
    callbackContext.success("BIG vajayjay");
  }

  @Override
  public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
    if (mBluetoothAdapter == null) {
      callbackContext.error("NO_BLUETOOTH");
      return true;
    } else if (!mBluetoothAdapter.isEnabled()) {
      callbackContext.error("BLUETOOTH_DISABLED");
      return true;
    } else if (action.equals("enabled")) {
      if(mBLESupported == beaconTransmitter.SUPPORTED){
        callbackContext.success("BLUETOOTH_OK");
        return true;
      }
      callbackContext.error("BLE_NOT_SUPPORTED");
      return true;
    }

    if (action.equals("start")) {
      final String arg0 = args.getString(0);
      final long secret = Long.parseLong(arg0);
      start(callbackContext,secret);
      return true;
    }
    else if (action.equals("stop")) {
      stop();
      callbackContext.success("stopped");
      return true;
    }
    return false;
  }

  @Override
  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
    mBluetoothAdapter = mBluetoothAdapter.getDefaultAdapter();
    mBLESupported = beaconTransmitter.checkTransmissionSupported(this.cordova.getActivity().getBaseContext());
  }

  protected void stop() {
    beaconTransmitter.stopAdvertising();
  }




}
