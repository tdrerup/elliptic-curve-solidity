//
//  SyncRandomBytes.h
//  randombytes
//
//  Forked by Martin Heidegger on 9/26/19.
//  Created by Mark Vayngrib on 10/13/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#elif __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import "React/RCTBridgeModule.h" // Required when used as a Pod in a Swift project
#endif


@interface SyncRandomBytes : NSObject<RCTBridgeModule>

@end
