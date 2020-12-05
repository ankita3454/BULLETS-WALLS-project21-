function hasCollided(xbullet,xwall)
{
  bulletRightEdge=xbullet.x+xbullet.width;
  wallLeftEdge=xwall.x;

  if ( bulletRightEdge>=wallLeftEdge)
  {
    
    return true
 }
    return false



}