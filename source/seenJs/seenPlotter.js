<html>
<head>
  <title>Depth of Field | seen.js</title>
  
  <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css"/>
  
  <link href="css/theme.css" rel="stylesheet" type="text/css"/>
  
   <script src="seen.js"></script>

  <script src="lib/seen.min.js"></script>
  
  <script src="http://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.7.1/coffee-script.min.js"></script>
  
</head>
<body>
  <div class="page">
    <h1>Depth of Field</h1>
    <h4></h4>

        <div class="nav-bar">
      <div class="nav-button-wrapper" style="text-align : left;">
        
          <a href="demo-text.html"><div class="nav-button">
          <div class="label">prev</div><div class="title">Text</div>
          </div></a>
        
      </div>
      <div class="nav-button-wrapper" style="text-align : center;">
          <a href="index.html"><div class="nav-button">
          <div class="label">up</div><div class="title">to index</div>
          </div></a>
      </div>
      <div class="nav-button-wrapper" style="text-align : right;">
        
          <a href="demo-equalizer.html"><div class="nav-button">
          <div class="label">next</div><div class="title">Audio Equalizer</div>
          </div></a>
        
      </div>
    </div>

    
    <canvas width="900" height="500" id="seen-canvas"></canvas>
    

    <div class="caption">
    
<p>Depth of field effect using StackBlur.js.</p>

    </div>

    
<script src="lib/StackBlur.js"></script>
<script type="text/coffeescript" id="code">
  width        = 900
  height       = 500
  shapeCount   = 4
  dofEnabled   = false
  dofFactor    = 4e-2
  bufferBounds = seen.Bounds.xyzwhd(0, 0, -1000, width, height, 2000)

  class DepthOfFieldPainter extends seen.Painter
    @opaque : seen.Colors.white()

    constructor : ->
      @buffer        = document.createElement('canvas')
      @buffer.width  = width
      @buffer.height = height
      @bufferLayer   = new seen.CanvasLayerRenderContext(@buffer.getContext('2d'))
      @delegate      = seen.Painters.path

    paint : (renderModel, context) ->
      # Blur radius using z coordinate to simulate depth of field
      blurRadius = Math.round(Math.abs(renderModel.transformed.barycenter.z) * dofFactor)

      bounds = renderModel.projected.bounds.copy().pad(blurRadius).intersect(bufferBounds)
      x = Math.round(bounds.minX())
      y = Math.round(bounds.minY())
      w = Math.round(bounds.width())
      h = Math.round(bounds.height())

      if dofEnabled and bounds.valid()
        # StackBlur produces incorrect results when blurring the alpha channel,
        # so instead we blur a black and white image then composite the fill
        # color using the value as its alpha channel.
        fill             = renderModel.fill
        renderModel.fill = DepthOfFieldPainter.opaque
        @bufferLayer.ctx.fillStyle = '#000000'
        @bufferLayer.ctx.fillRect(x, y, w, h)
        @delegate.paint(renderModel, @bufferLayer)
        try
          stackBlurContextRGB(@bufferLayer.ctx, x, y, w, h, blurRadius)
          @_compositeAlpha(@bufferLayer.ctx, x, y, w, h, fill)
          context.ctx.drawImage(@buffer, x, y, w, h, x, y, w, h)
        catch err
          console.error 'StackBlur failed', err
      else if bounds.valid()
        @delegate.paint(renderModel, context)

    _compositeAlpha : (ctx, x, y, w, h, fill) ->
      imageData    = ctx.getImageData(x, y, w, h)
      pixels       = imageData.data
      channelCount = w*h*4
      i           = 0
      while i < channelCount
        pixels[i + 3] = pixels[i]
        pixels[i]     = fill.r
        pixels[i + 1] = fill.g
        pixels[i + 2] = fill.b
        i += 4
      ctx.putImageData(imageData, x, y)

  dofPainter = new DepthOfFieldPainter()

  # Generate shapes for the scene
  generateShape = ->
    shape = seen.Shapes.extrude([
function plotPunktNu(string, x, z) {
string1 = string[0]
string2 = string[1]
if(Math.abs(x) <= 25 && Math.abs(z) <= 25){
   for(var y = -10; y < 10; y += 0.2){
         if(Math.abs(eval(string1)-eval(string2)) <= 2){
                   plotX = (x*w)
                   plotY = (y*yw*-1)
                   plotZ = (z*w)
                   //cArray.push([x,y,z])
                   col = map(dist(0,0,0,plotX,plotY,plotZ), 0, 250, 0,360)
                   stroke(col, 5, 5)
                   seen.P(0.6711409395973155,1.0506208213944603,10.521235521235521)

                   seen.P(0.45955882352941174,2.5089605734767026,10.56985294117647)

                   seen.P(0.0,5.892700087950748,7.009345794392524)

                   seen.P(3.4834324553950724,9.17587085811385,17.07731520815633)

                   seen.P(1.621160409556314,1.706484641638225,16.296928327645052)

                   seen.P(0.7130124777183601,1.9366197183098592,21.095152603231597)

                   seen.P(0.3524229074889868,5.906821963394343,18.47922192749779)

                   seen.P(2.723404255319149,12.76595744680851,13.957446808510639)

                   seen.P(9.216589861751152e-2,8.67003367003367,9.76958525345622)

                   seen.P(0.1855287569573284,4.601769911504425,9.183673469387756)



                 }
              }
            }
         }


      ], seen.P(0, 0, 0)) 
     .scale(40)
     .bake()
    shape.fill new seen.Material seen.Colors.hsl(0, 0, Math.random())
    shape.eachSurface (s) -> s.painter = dofPainter
    return shape

  generateFocalShape = ->
    shape = seen.Shapes.unitcube()
      .scale(1, 4, 1)
      .scale(40)
      .bake()
    shape.fill new seen.Material seen.Colors.hsl(0, 1, 0.5)
    shape.eachSurface (s) -> s.painter = dofPainter
    return shape

  model = seen.Models.default().rotx(Math.PI*0.1).translate(0,-100,0)
  group = model.append()
  for i in [0...shapeCount]
    group.add(generateShape())
  group.add(generateFocalShape())

  # Create scene and add shape to model
  scene = new seen.Scene
    cullBackfaces : false
    model         : model
    viewport      : seen.Viewports.center(width, height)

  # Create render context from canvas
  context = seen.Context('seen-canvas')
    .layer(new seen.FillLayer(width, height, '#DDDDDD'))
    .sceneLayer(scene)
    .render()

  # Drag to rotate. Disable DoF while rotating
  dragger = new seen.Drag('seen-canvas', {inertia : true})
  .on('drag.rotate', (e) ->
    group.roty(e.offsetRelative[0]*1e-2)
    context.render()
  )
  .on('dragStart.enabler', ->
    dofEnabled = false
  )
  .on('dragEndInertia.enabler', ->
    dofEnabled = false
    context.render()
  )


</script>


    
    <link href="http://yandex.st/highlightjs/8.0/styles/monokai_sublime.min.css" rel="stylesheet" type="text/css"/>
<script src="http://yandex.st/highlightjs/8.0/highlight.min.js"></script>
<pre><code id="code-view"></code></pre>
<script type="text/javascript">
  var view = document.getElementById('code-view');
  var code = document.getElementById('code');
  view.innerHTML = code.innerHTML;
  hljs.highlightBlock(view);
</script>
    
  </div>
</body>
</html>
