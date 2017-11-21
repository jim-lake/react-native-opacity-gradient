using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Opacity.Gradient.RNOpacityGradient
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNOpacityGradientModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNOpacityGradientModule"/>.
        /// </summary>
        internal RNOpacityGradientModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNOpacityGradient";
            }
        }
    }
}
