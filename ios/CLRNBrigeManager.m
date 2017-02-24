//
//  CLRNBrigeManager.m
//  QRCodeDemo
//
//  Created by Pello on 2017/2/20.
//  Copyright © 2017年 Pello. All rights reserved.
//

#import "CLRNBrigeManager.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import "LBXScanView.h"
#import <objc/message.h>
#import "LBXScanResult.h"
#import "LBXScanWrapper.h"
#import "SubLBXScanViewController.h"
#import <React/RCTRootView.h>

@interface CLRNBrigeManager () <RCTBridgeModule>

@end

@implementation CLRNBrigeManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(openCameraToIdentifyQRCode)
{
    [self notSquare];
}

- (void)notSquare
{
    //设置扫码区域参数
    LBXScanViewStyle *style = [[LBXScanViewStyle alloc]init];
    style.centerUpOffset = 44;
    style.photoframeAngleStyle = LBXScanViewPhotoframeAngleStyle_Inner;
    style.photoframeLineW = 4;
    style.photoframeAngleW = 28;
    style.photoframeAngleH = 16;
    style.isNeedShowRetangle = NO;
    
    style.anmiationStyle = LBXScanViewAnimationStyle_LineStill;
    
    
    style.animationImage = [self createImageWithColor:[UIColor redColor]];
    //非正方形
    //设置矩形宽高比
    style.whRatio = 4.3/2.18;
    
    //离左边和右边距离
    style.xScanRetangleOffset = 30;
    
    
    
    [self openScanVCWithStyle:style];
}

- (UIImage*) createImageWithColor: (UIColor*) color
{
    CGRect rect=CGRectMake(0.0f, 0.0f, 1.0f, 1.0f);
    UIGraphicsBeginImageContext(rect.size);
    CGContextRef context = UIGraphicsGetCurrentContext();
    CGContextSetFillColorWithColor(context, [color CGColor]);
    CGContextFillRect(context, rect);
    UIImage *theImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return theImage;
}

- (void)openScanVCWithStyle:(LBXScanViewStyle*)style
{
    SubLBXScanViewController *vc = [SubLBXScanViewController new];
    vc.style = style;
    UIViewController *rootViewController = [UIApplication sharedApplication].keyWindow.rootViewController;
    [rootViewController presentViewController:vc animated:YES completion:nil];
}


@end
