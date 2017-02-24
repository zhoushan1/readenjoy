//
//  CLEventEmitter.m
//  QRCodeDemo
//
//  Created by Pello on 2017/2/20.
//  Copyright © 2017年 Pello. All rights reserved.
//

#import "CLEventEmitter.h"

#define CL_QRCODE_CALLBACK @"QRCodeCallBack"

@implementation CLEventEmitter

+ (instancetype)sharedInstance
{
    static CLEventEmitter *instance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[self alloc] init];
    });
    return instance;
}

+ (instancetype)allocWithZone:(struct _NSZone *)zone
{
    static CLEventEmitter *instance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [super allocWithZone:zone];
    });
    return instance;
}

- (id)copyWithZone:(NSZone *)zone
{
    return [CLEventEmitter sharedInstance];
}
- (id)mutableCopyWithZone:(NSZone *)zone
{
    return [CLEventEmitter sharedInstance];
}

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
    return @[
             CL_QRCODE_CALLBACK
             ];
}

#pragma mark - QRCode Event
- (void)sendQRCodeResultWithObject:(id)object
{
    [self sendEvent:CL_QRCODE_CALLBACK object:object];
}

#pragma mark - Base Function
- (void)sendEvent:(NSString *)eventName object:(id)object
{
    [self sendEventWithName:eventName body:object];
}

@end
