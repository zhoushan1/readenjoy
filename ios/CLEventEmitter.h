//
//  CLEventEmitter.h
//  QRCodeDemo
//
//  Created by Pello on 2017/2/20.
//  Copyright © 2017年 Pello. All rights reserved.
//

#import <React/RCTEventEmitter.h>

@interface CLEventEmitter : RCTEventEmitter

+ (instancetype)sharedInstance;

- (void)sendQRCodeResultWithObject:(id)object;

@end
