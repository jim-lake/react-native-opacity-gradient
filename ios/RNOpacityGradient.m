#import "RNOpacityGradient.h"
#import <React/RCTConvert.h>
#import <UIKit/UIKit.h>
#import <QuartzCore/QuartzCore.h>

@implementation RNOpacityGradient {
  CAGradientLayer *_gradientLayer;
}

- (id)init {
  self = [super init];
  _gradientLayer = [CAGradientLayer layer];
  return self;
}

- (void)displayLayer:(CALayer *)layer
{
  [super displayLayer:layer];

  //override displayLayer because the build-in RCTView#displayLayer kills the mask
  _gradientLayer.frame = self.bounds;
  self.layer.mask = _gradientLayer;
}

- (void)setColors:(NSArray *)colorStrings
{
  NSMutableArray *colors = [NSMutableArray arrayWithCapacity:colorStrings.count];
  for (NSString *colorString in colorStrings) {
    [colors addObject:(id)[RCTConvert UIColor:colorString].CGColor];
  }
  _gradientLayer.colors = colors;
}

- (void)setStart:(CGPoint)start
{
  _gradientLayer.startPoint = start;
}

- (void)setEnd:(CGPoint)end
{
  _gradientLayer.endPoint = end;
}

- (void)setLocations:(NSArray *)locations
{
  _gradientLayer.locations = locations;
}

@end
