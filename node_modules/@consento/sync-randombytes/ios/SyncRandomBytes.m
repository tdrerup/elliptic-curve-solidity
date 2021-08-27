//
//  SyncRandomBytes.m
//  randombytes
//
//  Forked by Martin Heidegger on 9/26/19.
//  Created by Mark Vayngrib on 10/13/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "SyncRandomBytes.h"
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#elif __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import "React/RCTBridgeModule.h" // Required when used as a Pod in a Swift project
#endif

@implementation SyncRandomBytes

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

RCT_EXPORT_METHOD(randomBytes:(NSUInteger)length
                  callback:(RCTResponseSenderBlock)callback)
{
    callback(@[[NSNull null], [self randomBytes:length]]);
}

- (NSString *) randomBytes:(NSUInteger)length
{
    NSMutableData* bytes = [NSMutableData dataWithLength:length];
    SecRandomCopyBytes(kSecRandomDefault, length, [bytes mutableBytes]);
    return [bytes base64EncodedStringWithOptions:0];
}

- (NSDictionary *)constantsToExport
{
    return @{
        @"seed": [self randomBytes:4096]
    };
};

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

@end
