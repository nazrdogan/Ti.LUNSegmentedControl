var UILabel = require('UIKit/UILabel'),
    UIColor = require('UIKit/UIColor'),
    UIScreen = require('UIKit/UIScreen'),
    UIView = require('UIKit/UIView'),
    CGRectMake = require('CoreGraphics/CoreGraphics').CGRectMake,
    UIKit = require('UIKit/UIKit'),
    CGColor = require('CoreGraphics').CGColor,
    CGFloat = require('CoreGraphics').CGFloat,
    NSLayoutConstraint = require('UIKit/NSLayoutConstraint'),
    NSAttributedString = require('Foundation/NSAttributedString'),
    NSString = require('Foundation/NSString'),
    LUNSegmentedControl = require("LUNSegmentedControl/LUNSegmentedControl");

var segmentedControl = new LUNSegmentedControl();
var bounds = UIScreen.mainScreen.bounds;

var segmentedControl = new LUNSegmentedControl();
segmentedControl.translatesAutoresizingMaskIntoConstraints = false;
segmentedControl.setBackgroundColor(UIColor.colorWithRedGreenBlueAlpha(0.31764705882352939, 0.31764705882352939, 0.31764705882352939, 0.29999999999999999));
segmentedControl.textColor = UIColor.colorWithRedGreenBlueAlpha(0.40392156862745099, 0.40392156862745099, 0.40392156862745099, 1.000);
segmentedControl.selectedStateTextColor = UIColor.colorWithRedGreenBlueAlpha(1, 1, 1, 1.000);
segmentedControl.selectorViewColor = UIColor.colorWithRedGreenBlueAlpha(233 / 255.0, 0 / 255.0, 147 / 255.0, 1.000);
segmentedControl.cornerRadius = 25;

var view = new UIView();
view.setBackgroundColor(UIColor.blackColor);
view.addSubview(segmentedControl);

var LUNSegmentedControlDelegate = Hyperloop.defineClass('LUNSegmentedControlDelegate', 'NSObject', ['LUNSegmentedControlDataSource', 'LUNSegmentedControlDelegate']);

LUNSegmentedControlDelegate.addMethod({
	selector : 'numberOfStatesInSegmentedControl:',
	instance : true,
	returnType : 'NSInteger',
	arguments : ['LUNSegmentedControl'],
	callback : function(sender) {
		if (this.numberOfStatesInSegmentedControl) {

			return this.numberOfStatesInSegmentedControl(sender);
		}
	}
});

LUNSegmentedControlDelegate.addMethod({
	selector : 'segmentedControl:attributedTitleForStateAtIndex',
	instance : true,
	returnType : 'NSAttributedString',
	arguments : ['LUNSegmentedControl', "NSInteger"],
	callback : function(sender, index) {
		if (this.attributedTitleForStateAtIndex) {

			return this.attributedTitleForStateAtIndex(sender, index);
		}
	}
});

LUNSegmentedControlDelegate.addMethod({
	selector : 'segmentedControl:didScrollWithXOffset:',
	instance : true,
	returnType : 'void',
	arguments : ['LUNSegmentedControl', "NSInteger"],
	callback : function(sender, offset) {
		if (this.didScrollWithXOffset) {

			return this.didScrollWithXOffset(sender, offset);
		}
	}
});

LUNSegmentedControlDelegate.addMethod({
	selector : 'segmentedControl:gradientColorsForStateAtIndex:',
	instance : true,
	returnType : 'NSArray<UIColor *>',
	arguments : ['LUNSegmentedControl', "NSInteger"],
	callback : function(sender, index) {
		if (this.gradientColorsForStateAtIndex) {
			Ti.API.info("gradientColorsForStateAtIndex");
			return this.gradientColorsForStateAtIndex(sender, index);
		}
	}
});

var heightConstraint = NSLayoutConstraint.constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(segmentedControl, UIKit.NSLayoutAttributeHeight, UIKit.NSLayoutRelationEqual, null, UIKit.NSLayoutAttributeNotAnAttribute, 1, 50);

var widthConstraint = NSLayoutConstraint.constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(segmentedControl, UIKit.NSLayoutAttributeWidth, UIKit.NSLayoutRelationEqual, null, UIKit.NSLayoutAttributeNotAnAttribute, 1, 375);

var horizontalConstraint = NSLayoutConstraint.constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(segmentedControl, UIKit.NSLayoutAttributeCenterX, UIKit.NSLayoutRelationEqual, view, UIKit.NSLayoutAttributeCenterX, 1, 0);

var verticalConstraint = NSLayoutConstraint.constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(segmentedControl, UIKit.NSLayoutAttributeCenterY, UIKit.NSLayoutRelationEqual, view, UIKit.NSLayoutAttributeCenterY, 1, 0);

segmentedControl.addConstraint(heightConstraint);
segmentedControl.addConstraint(widthConstraint);
view.addConstraint(horizontalConstraint);
view.addConstraint(verticalConstraint);

view.frame = CGRectMake(0, bounds.size.height - 250, bounds.size.width, 50);

var delegate = new LUNSegmentedControlDelegate();

delegate.numberOfStatesInSegmentedControl = function() {

	return 3;
};

delegate.attributedTitleForStateAtIndex = function(sender, index) {

	return NSAttributedString.alloc().initWithString("ind:" + index);
};

delegate.attributedTitleForStateAtIndex = function(sender, index) {

	return NSAttributedString.alloc().initWithString("ind:" + index);
};

delegate.didScrollWithXOffset = function(sender, offset) {

};

delegate.gradientColorsForStateAtIndex = function(sender, index) {
	Ti.API.info("index :" + index);
	switch (index) {
	case 0:
		segmentedControl.selectorViewColor = UIColor.colorWithRedGreenBlueAlpha(177 / 255.0, 255 / 255.0, 0 / 255.0, 1.000);
		return [UIColor.colorWithRedGreenBlueAlpha(160 / 255.0, 223 / 255.0, 56 / 255.0, 1.000), UIColor.colorWithRedGreenBlueAlpha(177 / 255.0, 255 / 255.0, 0 / 255.0, 1.000)];

		break;

	case 1:
		segmentedControl.selectorViewColor = UIColor.colorWithRedGreenBlueAlpha(51 / 255.0, 199 / 255.0, 244 / 255.0, 1.000);
		return [UIColor.colorWithRedGreenBlueAlpha(78 / 255.0, 252 / 255.0, 208 / 255.0, 1.000), UIColor.colorWithRedGreenBlueAlpha(51 / 255.0, 199 / 255.0, 244 / 255.0, 1.000)];
		
		break;

	case 2:
		segmentedControl.selectorViewColor = UIColor.colorWithRedGreenBlueAlpha(233 / 255.0, 0 / 255.0, 147 / 255.0, 1.000);
		return [UIColor.colorWithRedGreenBlueAlpha(178 / 255.0, 0 / 255.0, 235 / 255.0, 1.000), UIColor.colorWithRedGreenBlueAlpha(233 / 255.0, 0 / 255.0, 147 / 255.0, 1.000)];
		
		break;

	default:
		break;
	}
	return null;
};

segmentedControl.setDelegate(delegate);
segmentedControl.setDataSource(delegate);

$.index.add(view);

$.index.open();
